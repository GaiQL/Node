var http = require('http');
var url = require('url');
var util = require('util');
var queryString = require('queryString');

//接受get请求;
// http.createServer((req,res)=>{
//
//   res.writeHead(200, {'Content-Type': 'text/plain; charset = utf-8'});
//   console.log(req);
//   var params = url.parse(req.url, true).query;
//   res.write('网站名：' + params.name);
//   res.write('\n');
//   res.write('网站url：' + params.url);
//   res.end();
//
// }).listen(3000);


//接受POST请求；

var postHTML =
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer((req,res)=>{
  var post = '';
  req.on('data',( chunk )=>{
    post += chunk;
  })
  req.on('end',()=>{
    post = queryString.parse(post);
    res.writeHead(200, {'Content-Type': 'text/plain; charset = utf-8'});
    if(post.name && post.url){
        res.write('网站名：' + params.name);
        res.write('\n');
        res.write('网站url：' + params.url);
    }else{
        res.write( postHTML );
    }
  })

}).listen(3000);
