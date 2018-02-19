var http = require('http');
var url = require('url');
var ejs = require('ejs');
var fs = require('fs');
/*
    ejs常用标签：
      <%  %>流程控制标签，写js
      <%= %>输出标签     原文输出HTML标签
      <%- %>输出标签     HTML会被浏览器解析
*/


var app = http.createServer((req,res)=>{

  var pathname = url.parse(req.url,true).pathname;

  res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'})
  if( pathname == '/login' ){
    ejs.renderFile('./views/login.ejs',{
    },function(err,data){
      if(err){
        console.log(err);
      }else{
        res.end(data);
      }
    })
  }else if( pathname == '/happy' ){
    ejs.renderFile('./views/heihei.ejs',{
      list:['请你不要','忘了我的模样','黑夜虽长','请别用来遗忘']
    },function(err,data){
      if(err){
        console.log(err);
      }else{
        res.end(data);
      }
    })
  }else if( pathname == '/dologin' ){
    if( req.method == 'POST' ){
      //也是一块块去读取的，要用一个变量把数据保存起来
      var postStr = '';
      req.on('data',(data)=>{
        console.log(data);
        // res.write(data.toString());
        // res.write(data);
        postStr += data;
        // fs.appendFile('name.txt',data + '\n',(err)=>{
        //   if(err){
        //     console.log(err)
        //   }else{
        //     console.log('写入成功');
        //   }
        // })
      })

      req.on('end',(err,data)=>{
        // console.log(postStr)
        fs.appendFile('name.txt',postStr + '\n',(err)=>{
          if(err){
            console.log(err)
          }else{
            console.log('写入成功');
          }
        })
        res.end('<script>alert("登录成功哦")</script>' + 'POST过来的');
      })
    }else if( req.method == 'GET' ){
      var obj = url.parse(req.url,true)
      console.log(obj);
      res.write('嘿嘿，这是GET请求哦');
      // res.write(JSON.stringify(obj));
      res.end();
    }
  }else{
    ejs.renderFile('./views/index.ejs',{
    },function(err,data){
      if(err){
        console.log(err);
      }else{
        res.end(data);
      }
    })
  }

}).listen(9000)


//根据不同的url去处理不同的业务逻辑；
