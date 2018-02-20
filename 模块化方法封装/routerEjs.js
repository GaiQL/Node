var http = require('http');
var url = require('url');
var ejs = require('ejs');
var fs = require('fs');

var fag = require('./module/model.js');
/*
    ejs常用标签：
      <%  %>流程控制标签，写js
      <%= %>输出标签     原文输出HTML标签
      <%- %>输出标签     HTML会被浏览器解析
*/


var app = http.createServer((req,res)=>{

  var pathname = url.parse(req.url,true).pathname.split('/')[1];

  res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'})

  if( !fag[pathname] ){
    pathname = 'index';
  }

  fag[pathname](req,res);

}).listen(9000)


//根据不同的url去处理不同的业务逻辑；
