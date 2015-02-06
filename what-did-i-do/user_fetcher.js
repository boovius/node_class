var request = require('request');
var http = request.defaults({
  json: true,
  headers: {
    'User-Agent': "what-did-do-app",
    'Authorization': 'Token 677f02c8032c04dbb384d3fb75c3a3fb716cae3f'
  },
});

module.exports = function(username, callback) {
  http.get('https://api.github.com/users/' + username,
  function(err, _, user){
    console.log(user);
    callback(err, user);
  });
}
