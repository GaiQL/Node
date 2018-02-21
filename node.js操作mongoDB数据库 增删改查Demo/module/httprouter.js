var url = require('url');
var fs = require('fs');

var server = function(){

  // var obj = {};
  var obj = this;

  this._GET = {};
  this._POST = {};

  app = function(req,res){
    res.send = function(content){
      res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'})
      res.end(content);
    }

    var pathname = url.parse(req.url).pathname

    if( obj['_' + req.method][pathname] ){
      if( req.method == 'GET' ){
        var data = url.parse(req.url,true).query;
        req.body = JSON.stringify(data);
        obj['_' + req.method][pathname](req,res);
      }else if( req.method == 'POST' ){
        var postStr = '';
        req.on('data',(data)=>{
          postStr += data;
        })
        req.on('end',(err,data)=>{
          fs.appendFile('name.txt',postStr + '\n',(err)=>{
            if(err){
              console.log(err)
            }else{
              console.log('写入成功');
            }
          })
          req.body = postStr
          obj['_' + req.method][pathname](req,res);
        })
      }
    }else{
      res.end('no router');
    }
  }

  app.get = function( string,callback ){
    obj._GET[string] = callback;
  }

  app.post = function( string,callback ){
    obj._POST[string] = callback;
  }

  return app

}
module.exports = server();
