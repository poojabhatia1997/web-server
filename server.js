var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000
var middleware = require('./middleware.js');

// app.use(middleware.requireAuthentication);
// app.use(middleware.requestTime);

app.get('/',middleware.requireAuthentication ,function (req, res) {
    res.send('hello express!');
});



app.get('/about',middleware.requestTime, function (req, res) {
	res.send('About us' + req.requestTime);
	// var text = 'hello world!';
	// text += '<small>requested at : ' + req.requestTime + '<small>' 
	//res.send(text);
});

app.use(express.static(__dirname + '/Public'));

app.listen(PORT);