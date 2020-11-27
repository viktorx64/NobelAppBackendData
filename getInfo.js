/*
	Get Info from nobel nominies
	author: Viktorx64
*/

console.log("Program starting");
const express = require('express');
const router = express()
const bodyParser = require('body-parser');
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
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	next();
});

router.get('/', function(req,res, next) {
	fs.readFile(dataPath, (err, data) => {
		if (err) {
			throw err;
		}
		//var nobleList = JSON.parse(data);
		res.send("find data on '/allNobel'<br> it returns JSON");
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

//get All Votes
router.get('/vote', function(req,res, next) {
	fs.readFile(dataPathVotes, (err, data) => {
		if (err) {
			throw err;
		}
		//var nobleList = JSON.parse(data);
		res.send(JSON.parse(data));
		next();
	});
});

//save Votes
router.put('/vote', function(req,res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	var nobleList;
	var id = parseInt(req.body.id);
	fs.readFile(dataPathVotes, (err, data) => {
		if (err) {
			throw err;
		}
		nobleList = JSON.parse(data);
		nobleList[id].votes++;
		
		fs.writeFile(dataPathVotes, JSON.stringify(nobleList), (err) => {
			if (err) {
				throw err;
			}
			console.log("somebody voted!");
		});
		
		res.send(nobleList);
		next();
	});
});

/*
	may remove this when using it as an api
*/ 
router.listen(process.env.PORT || 3000, function(){
	console.log("Server Listening on port 3000");
});
//export it
module.exports = router;
