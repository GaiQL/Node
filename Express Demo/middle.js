var express = require('express');
var bodyParse = require('body-parser');
var app = new express;

app.set('view engine','ejs')

app.listen(8080);

app.use(express.static('public'));//内置中间件

//第三方中间件
app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())

//功能中间件
app.use((res,req,next)=>{
  console.log(+new Date);
  next();
})

//路由中间件
app.get('/login',(req,res,next)=>{

  res.render('login.ejs')

  next();

})

app.get('/login',(req,res)=>{

  console.log('嘿嘿');

})

app.post('/dologin',(req,res)=>{

  console.log(req.body);
  res.send( JSON.stringify(req.body) )

})


//错误处理中间件

app.use((req,res)=>{
  res.send('发生了一个未知的错误');
})
