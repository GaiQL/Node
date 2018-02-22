var express = require('express');

var app = new express;

var cookie = require('cookie-parser');

app.set('view engine','ejs');

app.listen(8000);

app.use( cookie() );

app.use((req,res,next)=>{
  // console.log(req.cookies);
  console.log(req.cookies.list);
  next();
})

app.get('/',(req,res)=>{

  var list = [];

  if(  req.cookies.list.length ){
    list = req.cookies.list
  }

  res.render('travel',{list:list})

})

app.get('/lvyou',(req,res)=>{

  // res.cookie('list',list,{signed:true})
  if( !req.query.city ){
    res.send('选个地方吧');
    return;
  }

  var list = [];

  if( req.cookies.list.length ){
    list = req.cookies.list
  }

  list.push(req.query.city);

  res.cookie('list',list)

  res.send('hello world');


})
