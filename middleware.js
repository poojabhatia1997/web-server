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
module.exports = middleware;