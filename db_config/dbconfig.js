// mongo db setup
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const assert = require('assert');
const Employee = require('../modals/Employee.modal');
// Connection URL
const url = 'mongodb://localhost:27017';

// Mongo Db Congif
const dbName = 'MyApp1';
var db;
var collection;
MongoClient.connect(url, (err, client) => {
    if (err) return console.log(err)
    db = client.db(dbName)
    collection = db.collection('employees');
})

module.exports = {
    GetAllEmp: function (req, res) {
        collection.find({}).toArray(function (err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            res.send(docs)
        });
    },

    GetEmp: function (req, res) {
        collection.find({ _id: new ObjectId(req.params.id) }).toArray(function (err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            res.send(docs)
        });
    },

    InsertEmp: function (req, res) {
        let obj = new Employee({
            name: req.body.name,
            desig: req.body.desig,
            phone: req.body.phone,
            loc: req.body.loc,
        });
        collection.insert(obj, (err, res2) => {
            if (err) res.send(err);
            else res.send('Employee Inserted');
        })
    },

    DeleteEmp: function (req, res) {
        collection.deleteOne({ _id: new ObjectId(req.params.id) }, (err, res2) => {
            if (err) res.send(err);
            else res.send('Employee Removed');
        })
    },

    UpdateEmp: function (req, res) {
        let obj = new Object({
            name: req.body.name,
            desig: req.body.desig,
            phone: req.body.phone,
            loc: req.body.loc,
        });
        collection.updateOne({ _id: new ObjectId(req.body._id) }, { $set: obj }, (err, res2) => {
            if (err) res.send(err);
            else res.send('Employee Updated');
        })
    }
}