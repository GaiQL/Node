var express = require('express');

var app = new express;

app.listen(8000);

//动态路由
app.get('/dynamic/:aid/:zzz/:ccc',(res,req)=>{
  //获取动态路由;
  console.log( res.params );
  req.send('嘿嘿');
})

//获取get传值
app.get('/transmit',(req,res)=>{

  //获取动态路由;
  console.log( res.query );
  if( !req.query.name ){
    req.query.name = '无';
  }
  res.send('这是get传值哦 ： '  +  req.query.name);

})

app.get('/',(req,res)=>{
  res.send('Hello world!!!');
})
