var express = require('express');

var app = new express;

app.listen(8000);

app.set('view engine','ejs');

app.use(express.static('public'));

app.set('view degnic','ejs');

app.get('/',(req,res)=>{
  res.render('login');
})

app.get('/goods',(req,res)=>{
  res.render('index');
})

app.get('/goodsAdd',(req,res)=>{
  res.render('add');
})

app.get('/goodsEdit',(req,res)=>{
  res.render('edit');
})
