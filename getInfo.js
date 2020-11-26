/*
	Get Info from nobel nominies
*/

console.log("Program starting");
var express = require('express');
var router = express()
var fs = require('fs');

const dataPath = "./data/candidates.json";
const Image = "./data/test.png";
router.get('/tester', function(req, res, next) {
	res.send("It Works");
	next();
});

router.get('/', function(req,res, next) {
	fs.readFile(dataPath, (err, data) => {
		if (err) {
			throw err;
		}
		//var nobleList = JSON.parse(data);
		res.send("find data on '/allNobel'\n it returns JSON");
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

router.get('/thisNobel', function(req, res, next) {
	res.send("get this nobel deltagare");
	next();
})

router.get('/image', function(req, res, next) {
	fs.readFile(Image, (err, data) => {
		if (err) {
			throw err;
		}
		res.send("<img src='" + data + "'></img>");
		next();
	});
})
/*
	may remove this when using it as an api
*/ 
router.listen(process.env.PORT || 3000, function(){
	console.log("Server Listening on port 3000");
});
//export it
module.exports = router;
