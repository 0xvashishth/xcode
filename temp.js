var fs = require('fs');


	let random = Math.floor((Math.random() * 10000000) + 1);
	// console.log(code);
	let filePath = "test"+random;
	console.log(filePath);
	fs.writeFile(filePath, 'hello world', function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("File saved successfully!");
	});