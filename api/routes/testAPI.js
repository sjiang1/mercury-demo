var express = require("express");
var router = express.Router();
var games = "O,O,,X,O,X,,O,,,X,X,,O,X,O,,X,,";
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverS", function (err, db) {
   
     db.collection('games', function (err, collection) {
        
        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

        db.collection('Persons').count(function (err, count) {
            //if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
});

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", function(req, res, next) {
	res.send(games);
});

router.post("/send", function(req, res) {
	var data = req.body.game +",";
	console.log(data);
	games = data + games;
});

module.exports = router;