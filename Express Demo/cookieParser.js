
var express = require('express');

var cookie = require('cookie-parser');

var app = new express;

app.set('view engine','ejs');

app.use( cookie() );

app.listen(8000);

app.use((req,res,next)=>{
  console.log(req.cookies);
  next();
})

app.get('/',(req,res)=>{
  res.render('index')
})

app.get('/set',(req,res)=>{
  res.cookie('name','heiheihei',{maxAge:60000});
  res.send('设置成功哦');
})
