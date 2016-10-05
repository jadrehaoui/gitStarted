var express		= require('express');
var app 		= express();
var p		= process.env.PORT || 3000;
app.get('/', function(req, res){
	res.send('hello world!');
});
app.listen(p, function(){
	console.log('listening on '+ p);
});