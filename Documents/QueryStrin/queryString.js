const http = require('http');
const url = require ('url');

http.createServer(function(req, res) {
    let query = url.parse(req.url, true).query;

    res.writeHead(200, {'Content-Type': 'text/plain'});

    let language = query.language ? query.language : 'JavaScript' ;

    res.end(`el lenguaje seleccionado es ${language}`)
}).listen(8080);

console.log('El servidor esta funcionando en el puerto 8080');