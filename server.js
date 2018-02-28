var express = require('express');
var app = express();

var middleware = {
	     requireAuthentication: function (req, res, next){
         console.log('private route hit!');
         next();
	},
	logger: function (req, res, next){
		  console.log(req.method);
		  next();
	},
    requestTime: function (req, res, next){

    	req.requestTime = Date()
    	console.log(req.requestTime);
    	next();
    }
}

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

app.use(express.static(__dirname + '/public'));

app.listen(3000);