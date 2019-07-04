const request = require('superagent');

var sendRequest = function(data) {
	return new Promise((resolve, reject) => {
		var req = request
      	data.method = data.method.toLowerCase();

      	req = req[data.method](data.url);
	    req = (data.requestBody ? req.send(data.requestBody) : req);
	    req = (data.filePath ? req.attach(data.filePath) : req);
	    req = data.headers ? req.set(data.headers) : req;
	    //req = !!proxy ? req.proxy(proxy) : req
	    req = data.query ? req.query(data.query) : req;

	    req.end((error, res) => {
	      resolve(res);
	    });
	});
}

module.exports = sendRequest;