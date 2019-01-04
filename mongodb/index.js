var MongoClient = require('mongodb').MongoClient;
var create = require("./create");
var del = require("./delete");
var read = require("./read");
MongoClient.connect("mongodb://localhost:27017/testing", function (err, dbb) {
  if (err)
    throw err;
  console.log("connected successfully");
  var db = dbb.db("testing");
  var promise = Promise(function (resolve, reject) {
    try {
      create.table_create(db);
      resolve("done");
    } catch (err) {
      reject(err);
    }
  });
  promise.then(function (res) {
    return new Promise(function (resolve, reject) {
      try {
        create.data_create_single(db.collection("testing"));
        resolve("done2");
      } catch (error) {
        reject(error);
      }
    });
  }).
  then(function (res) {
    return new Promise(function (resolve, reject) {
      try {
        read.read_all(db.collection("testing"));
        resolve("done3");
      } catch (error) {
        reject(error);
      }
    });
  }).
  then(function (res) {
    return new Promise(function (resolve, reject) {
      try {
        del.delete_collection(db.collection("testing"));
        resolve("done4");
      } catch (error) {
        reject(error);
      }
    });
  }, function (error) {
    console.log(error);
  });
  /*
    create.data_create_single(db.collection("testing"));
  read.read_all(db.collection("testing"))
  del.delete_collection(db.collection("testing"));
  */
});