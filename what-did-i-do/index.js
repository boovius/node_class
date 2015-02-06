console.log('yay... we are liveeee!!!!\n');
var request = require('request');
var async = require('async');
var http = request.defaults({
  json: true,
  headers: {
    'User-Agent': "what-did-do-app",
    'Authorization': 'Token '
  },
})

http.get('https://api.github.com/users/boovius/events/public', function (err, _, events) {
  if (err) {throw err;}

  var iteratorFn = function(event, callback) {
    if (event.type === 'PushEvent') {
      console.log(event.actor.login + " pushed to " + event.repo.name + " at " + event.created_at)
      url = 'https://api.github.com/repos/' + event.repo.name + '/git/commits/' + event.payload.head
      http.get(url, function(err, _, commit) {
        if (err) { throw err; }
        console.log(" and did the following: " + commit.message);
        callback();
      });
    } else {
      console.log(event.actor.login + " did " + event.type + " on " + event.repo.name + " at " + event.created_at)
      callback();
    }
  };

  var doneFn = function (err) {
    if (err) { console.log(err.toString()); }
    console.log('done!');
  };

  async.eachSeries(events, iteratorFn, doneFn)
});
