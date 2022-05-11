var http =require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/plan' });
    res.write('welcome');
    res.end('thank you for watching Thanks');
}).listen(8080)

/**
nodemon --watch app --watch libs app/server.js
 */