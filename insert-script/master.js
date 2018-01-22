var mongo = require('mongodb');
var documents = require("./tq_documents");
var genders = require("./tq_genders");
var relations = require("./tq_relations");

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://admin:admin@cluster0-shard-00-00-hjuxm.mongodb.net:27017,cluster0-shard-00-01-hjuxm.mongodb.net:27017,cluster0-shard-00-02-hjuxm.mongodb.net:27017/tqdata?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
MongoClient.connect(uri, (err, db) => {
  if (err) throw err;
  console.log("Database created!");
  db.createCollection("genders", (err, res) => {
    if(err) throw err;
    console.log("Gender collection created!");
    var myobj = genders;
    db.collection("genders").insertMany(myobj, (err, res) => {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
  });
  db.createCollection("relations", (err, res) => {
    if(err) throw err;
    console.log("Relations collection created!");
    var myobj = relations;
    db.collection("relations").insertMany(myobj, (err, res) => {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
  });
  db.createCollection("documents", (err, res) => {
    if(err) throw err;
    console.log("Documents collection created!");
    var myobj = documents;
    db.collection("documents").insertMany(myobj, (err, res) => {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  });
});



