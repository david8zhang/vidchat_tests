var path = require('path');

//Initialize Express
var express = require('express');
var app = express();
var server = require('http').createServer(app).listen(4100);
console.log('server listening on 4100');

//Set the view engine as embedded javascript
app.set('view engine', 'ejs');


/*Routes*/
app.get('/', function(req, res){
	res.render('index')
});

//Load external js files
app.use(express.static(__dirname + '/js'));