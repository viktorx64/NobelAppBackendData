/*
	Get Info from nobel nominies
*/

console.log("Program starting");
var express = require('express');
var router = express()

router.get('/', function(req, res, next) {
	res.send("It Works");
	next();
})

router.listen(process.env.PORT || 3000, function(){
	console.log("Server Listening on port 3000");
});
module.exports = router;
