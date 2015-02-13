var Mongo = require('easymongo');
var db = new Mongo({dbname: 'social-app'});
var users = db.collection('users');

users.save({name: 'josh'}, function(err, user) {
  if (err) { throw err; }
  console.log('added user: ', user);

  users.count(funciton(err, count) {
    if (err) { throw err; }
    console.log('users count:', count);
    db.close();
  });
});
