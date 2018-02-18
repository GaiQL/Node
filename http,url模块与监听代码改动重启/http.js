var http = require('http');

http.createServer((req,res)=>{

  res.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'});

  res.write('这个hotnode有些慢啊');

  res.end();

}).listen(8080);
