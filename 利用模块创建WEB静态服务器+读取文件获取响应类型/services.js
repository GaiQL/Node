var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');//通过path模块拿到文件后缀
var events = require('events');
var EventEmitter = new events.EventEmitter;
var getMime = require('./module/getmime');


var app = http.createServer((req,res)=>{
  // console.log(url.parse(req.url))
  if( req.url == '/' ){

    req.url = '/index.html'; /* 默认加载的首页 */

  }
  if( req.url != '/favicon.ico' ){  /* 过滤请求 */

    req.url = url.parse(req.url,true).pathname

    var suffix = path.extname(req.url);

    fs.readFile('static' + req.url,(err,data)=>{
      if(err){

        console.log('err');

        fs.readFile('static/404.html',(err,data)=>{
          if(err){

            console.log(err);

          }else{

            res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'})
            res.write(data);
            res.end();

          }
        })
      }else{
          // console.log(data);
          // getMime( suffix,EventEmitter )
          // EventEmitter.on('sad',(mimeData)=>{
          //   res.writeHead(200,{'Content-Type': mimeData +';charset=utf-8'})
          //   // res.write(data);
          //   res.end(data);
          // })
          //回调函数处理异步：
          getMime( suffix,function(name){
            res.writeHead(200,{'Content-Type': name +';charset=utf-8'})
            res.write(data);
            res.end();
          } )

      }
    })
  }
})

app.listen(8080);
