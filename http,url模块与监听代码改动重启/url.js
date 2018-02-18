var http = require('http');
var url = require('url');

http.createServer((req,res)=>{

  res.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'});

  console.log(url.parse(req.url,true));

  res.write('嘿嘿嘿嘿');

  res.end();

}).listen(8080);
