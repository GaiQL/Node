var str = require('./config.js');
var http = require('http');

var app = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  if( req.url != '/favicon.ico' ){
    console.log(str.str);
  }
  res.write('嘿嘿');
  res.end();
})

app.listen(8080);
// console.log(str.str);
