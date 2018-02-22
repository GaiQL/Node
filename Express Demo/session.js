
/*
    session 是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，session保存在服务器上。




    session运行在服务器端，当客户端第一次访问服务器时，可以将客户的登录信息保存。
    当客户访问其他页面时，可以判断客户的登录状态，作出提示，相当于登录拦截。



*/

var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);


var app = new express;

// app.set('trust proxy', 1)

app.listen(8000);

app.use(session({
  secret: 'Random',          //secret  一个string类型的字符串，作为服务器端生成session的签名。
  name:'heihei',             //name    返回客户端key的名称，默认为connect.sid,也可以自己设置。
  resave: false,             //resave  强制保存session,及时session没有变化。  false最好
  saveUninitialized: true,   //saveUninitialized   强制将未初始化的session值存储。
  cookie: { secure: false,maxAge:5000000 },   //cookie   设置返回到前端Key的属性，默认值为{paht:'/',httpOnly:true,secure:false,maxAge:null};
  rolling:true,               //默认false，在每次请求时强行设置cookie，这将重置cookie过期时间。
  store:new MongoStore({
      url: 'mongodb://127.0.0.1:27017/sad',
      touchAfter: 24 * 3600
  })
}))

app.use((req,res,next)=>{
  console.log(req.session.userName);
  next();
})

app.get('/',(req,res)=>{

  if( req.session.userName ){
    res.send('欢迎回家');
  }else{
    res.send('请登录');
  }

})

app.get('/login',(req,res)=>{

  req.session.userName = 'sad';
  res.send('登录成功哦');

})


app.get('/loginOut',(req,res)=>{

  //     1
  // req.session.cookie.maxAge = 0;

  //     2
  req.session.destroy((err)=>{
    if(!err){
      console.log('销毁成功');
    }
  })
  res.send('退出登录成功');

})
