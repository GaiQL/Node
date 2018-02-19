var fs = require('fs');
var url = require('url');
var path = require('path');

function getMime( mime,callback ){

  //回调函数读取data
  fs.readFile('./mime.json',(err,data)=>{
    if(err){
      console.log(err);
    }else{
      callback(JSON.parse(data.toString())[mime])
      // EventEmitter.emit('sad',JSON.parse(data.toString())[mime]);
    }
  })
}

exports.statics = function( req,res,staticpath ){

  if( req.url == '/' ){

    req.url = '/index.html'; /* 默认加载的首页 */

  }
  if( req.url != '/favicon.ico' ){  /* 过滤请求 */

    req.url = url.parse(req.url,true).pathname

    var suffix = path.extname(req.url);

    fs.readFile(staticpath + req.url,(err,data)=>{
      if(err){

        console.log('err');

        fs.readFile(staticpath + '/404.html',(err,data)=>{
          if(err){

            console.log(err);

          }else{

            res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'})
            res.write(data);
            res.end();

          }
        })
      }else{
          getMime( suffix,function(name){
            res.writeHead(200,{'Content-Type': name +';charset=utf-8'})
            res.write(data);
            res.end();
          } )

      }
    })
  }
}
