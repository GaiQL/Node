/*

  下载
  代码中配置
  res.render()

*/

var express = require('express');

var app = new express;

app.set('view engine','ejs');

app.use(express.static('public'));

app.listen(8000);


app.get('/',(req,res)=>{
  res.render('index')
})
