/*
	Get Info from nobel nominies
	author: Viktorx64
*/

console.log("Program starting");
const express = require('express');
const router = express()
const bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');

const dataPath = "./data/candidates.json";
const dataPathVotes = "./data/votes.json";
const Image = "./data/test.png";
router.get('/tester', function(req, res, next) {
	res.send("It Works");
	next();
});

router.use(bodyParser.urlencoded({ extended: true }));
router.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.header('Access-Control-Allow-Credentials', 'true');
	next();
});

router.get('/', function(req,res, next) {
	fs.readFile(dataPath, (err, data) => {
		if (err) {
			throw err;
		}
		//var nobleList = JSON.parse(data);
		res.send("find data on '/nobel'<br> it returns JSON\n and '/nobel/:id'");
		next();
	});
});

router.get('/nobel', function(req,res, next) {
	fs.readFile(dataPath, (err, data) => {
		if (err) {
			throw err;
		}
		//var nobleList = JSON.parse(data);
		res.send(JSON.parse(data));
		next();
	});
});

router.get('/nobel/:id', function(req, res, next) {
	var id, candidate;
	fs.readFile(dataPath, (err, data) => {
		if (err) {
			throw err;
		}
		id = req.params.id;
		candidate = JSON.parse(data);

		res.send(candidate[id]);
		next();
	});
});

router.listen(process.env.PORT || 3000, function(){
	console.log("Server Listening on port 3000");
});
//export it
module.exports = router;
