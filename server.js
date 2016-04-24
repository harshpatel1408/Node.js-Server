var http = require('http');// http is module, we require(to access), and saved as a var to access it.
var fs = require('fs');

// 404  response [If page is not found then it will generate 404 response]
function send404Response(response){
	response.writeHead(404,{
		"Context-type":"text/plain"
	});
	response.write("Error 404! Ooopsss page not found:");
	response.end();
}

function onRequest(request, response){
		if(request.method == 'GET' && request.url == '/'){// "/" is the root
			response.writeHead(200, {
				"Context-type": "text/html"
			});
			fs.createReadStream("./website/index.html").pipe(response);
		}
		else{
			send404Response(response);
		}
}

// Create server. Creating server is a method of http.
http.createServer(onRequest).listen(8888);
console.log("sever is now running");