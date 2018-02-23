var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParse = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var DBurl = 'mongodb://127.0.0.1:27017/merManage';

var app = new express;

app.listen(8000);

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())


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

  if( req.url == '/login' || req.url == '/dologin' ){
    next();
  }else{
    if( req.session.userInfo ){

      //ejs模板配置全局变量
      app.locals['name'] = req.session.userInfo.userName
      next();
    }else{
      // res.send('<script>alert("请您先登录");location.href="/login"</script>')
      res.redirect('/login');
    }
  }
})


app.get('/login',(req,res)=>{
  res.render('login');
  //获取前端发来的用户名密码，查看数据库中是否有匹配
  //匹配后在数据库中存储session
  //
})

app.set('view degnic','ejs');
app.post('/dologin',(req,res)=>{
  var data = req.body;
  console.log(data);
  MongoClient.connect(DBurl,(err,db)=>{
    if(err){
      console.log('数据库连接失败');
    }else{
      var list = [];
      var curosr = db.collection('user').find(data);
      //去数据库寻找数据的时候，要记得去遍历拿数据。

      //另一种遍历数据的方法
      curosr.toArray((err,data)=>{
        if( data.length ){
          req.session.userInfo = data[0];
          res.redirect('/goods');   //跳转
          //session 保存用户信息;
        }else{
          res.send('<script>alert("您输入的账号密码不存在哦...");location.href="/login"</script>')
        }
      })

    }
  })
})

app.get('/',(req,res)=>{
  res.send('hello world!!!!!');
})


app.get('/goods',(req,res)=>{

  res.render('index',{
    name:req.session.userInfo.userName
  });

})

app.get('/add',(req,res)=>{
  res.render('add');
})

app.get('/edit',(req,res)=>{
  res.render('edit');
})


app.get('/quit',(req,res)=>{
  req.session.destroy((err)=>{
    if(!err){
      console.log('销毁成功');
      res.redirect('login');
    }
  })
})
