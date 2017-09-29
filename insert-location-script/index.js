var mongo = require('mongodb');
var countries = require("./tq_pais");
var states = require("./tq_departamentos");
var cities = require("./tq_ciudades");

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://admin:admin@cluster0-shard-00-00-hjuxm.mongodb.net:27017,cluster0-shard-00-01-hjuxm.mongodb.net:27017,cluster0-shard-00-02-hjuxm.mongodb.net:27017/location?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
MongoClient.connect(uri, (err, db) => {
  if (err) throw err;
  console.log("Database created!");
  db.createCollection("countries", (err, res) => {
    if(err) throw err;
    console.log("Countries collection created!");
    var myobj = countries;
    db.collection("countries").insertMany(myobj, (err, res) => {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
  });
  db.createCollection("states", (err, res) => {
    if(err) throw err;
    console.log("States collection created!");
    var myobj = states;
    db.collection("states").insertMany(myobj, (err, res) => {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
  });
  db.createCollection("cities", (err, res) => {
    if(err) throw err;
    console.log("Cities collection created!");
    var myobj = cities;
    db.collection("cities").insertMany(myobj, (err, res) => {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  });
});



