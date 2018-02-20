
var ejs = require('ejs');
var fs = require('fs');


var app = {
  login:function(req,res){
    ejs.renderFile('./views/login.ejs',{
    },function(err,data){
      if(err){
        console.log(err);
      }else{
        res.end(data);
      }
    })
  },
  dologin:(req,res)=>{
    if( req.method == 'POST' ){
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
        res.end('<script>alert("登录成功哦")</script>' + 'POST过来的');
      })
    }else if( req.method == 'GET' ){
      var obj = url.parse(req.url,true)
      console.log(obj);
      res.write('嘿嘿，这是GET请求哦');
      res.end();
    }
  },
  index:function(req,res){
    ejs.renderFile('./views/index.ejs',{
    },function(err,data){
      if(err){
        console.log(err);
      }else{
        res.end(data);
      }
    })
  },
  happy:function(req,res){
    ejs.renderFile('./views/heihei.ejs',{
      list:['请你不要','忘了我的模样','黑夜虽长','请别用来遗忘']
    },function(err,data){
      if(err){
        console.log(err);
      }else{
        res.end(data);
      }
    })
  }
}

module.exports = app;
