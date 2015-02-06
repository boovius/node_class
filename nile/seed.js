var async = require('async');
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nile"
var db;

function addBook (name, author, callback) {
  console.log('trying to add a book');
  var books = db.collection('books');
  books.insert({ name: name, author: author }, function(err) {
    callback(err);
  });
}

async.waterfall([
  function(callback) {
    mongo.connect(url, callback);
  },
  function(_db, callback) {
    console.log('connected to db');
    db = _db;
    callback();
  },
  function(callback) {
    console.log('adding first book');
    addBook('Bars in Los Angeles', 'dickeyxxx', callback);
  },
  function(callback) {
    addBook('Bars in Portland', 'dickeyxxx', callback);
  },
  function(callback) {
    console.log('finding the books');
    var books = db.collection('books');
    books.find({}).toArray(callback);
  },
  function(books, callback) {
    console.log('there are ' + books.length + ' books');
    callback();
  }
], function (err) {
  if (err) { throw err; }
  db.close();
  console.log('done!');
});
