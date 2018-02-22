
var express = require('express');

//1、安装引入
var cookie = require('cookie-parser');

var app = new express;

app.set('view engine','ejs');


//2、设置中间件;  用到cookie加密时，传一个随意的字符串用于加密算法。
app.use( cookie('comeon') );

app.listen(8000);

app.use((req,res,next)=>{
  // console.log(req.cookies);
  console.log(req.signedCookies);
  next();
})

app.get('/',(req,res)=>{
  res.render('index')
})

app.get('/remove',(req,res)=>{

  //删除cookie;
  res.cookie('name','',{maxAge:0});

  res.send('删除成功');

})

app.get('/set',(req,res)=>{
<<<<<<< HEAD
  res.cookie('name','heiheihei',{maxAge:60000});
  //最后一个参数


=======

  //3、res.cookie使用。
  res.cookie('name','heiheihei',{signed:true});
  // maxAge   毫秒，过期时间;
  // Expires  设置在某个时间点后cookie失效。
  // domain   域名设置  子域名都可以共享cookie  只能在当前域下访问cookie。    删除cookie要注意域名一致;
  // path     表示当前设置的cookie在哪个路由下可以访问。
  // httpOnly 设置为true时，表示只有在node.js服务端可以操作cookie，没法用js脚本语言去操作cookie。
  // signed   加密cookie，获取不再是req.cookies，而是req.signedCookies去获取。
  // secure   设置为true后，cookie再http中是无效的，在https中才有效。
>>>>>>> f8ed0415f7169898b5a9f84ee92208ab30061ca3

  res.send('设置成功哦');

})
