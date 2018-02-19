var http = require('http');
var router = require('./module/router.js');


var app = http.createServer((req,res)=>{
  
  // console.log(url.parse(req.url))
  router.statics(req,res,'static');

})

app.listen(8080);
