var Mongo = require('easymongo');
var db = new Mongo({dbname: 'social-app'});
var users = db.collection('users');
var async = require('async');

async.waterfall([
  function(done) {
    users.save({name: 'josh'}, done);
  },
  function(user, done) {
    console.log('added user: ', user);
    users.count(done);
  },
  function(count, done) {
    console.log('users count:', count);
    done();
  }
], function(err) {
  console.error(err);
  db.close();
  console.log('done');
});
