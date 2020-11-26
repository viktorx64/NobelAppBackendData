/*
	Get Info from nobel nominies
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

router.get('/allNobel', function(req,res, next) {
	fs.readFile(dataPath, (err, data) => {
		if (err) {
			throw err;
		}
		//var nobleList = JSON.parse(data);
		res.send(JSON.parse(data));
		next();
	});
});

//get All Votes
router.get('/votes', function(req,res, next) {
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

router.get('/thisNobel', function(req, res, next) {
	res.send("get this nobel deltagare");
	next();
})

/*
	may remove this when using it as an api
*/ 
router.listen(process.env.PORT || 3000, function(){
	console.log("Server Listening on port 3000");
});
//export it
module.exports = router;
