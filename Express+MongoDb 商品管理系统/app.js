var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = new express;


//获取 post 数据;------------无法上传图片
// var bodyParse = require('body-parser');
// app.use(bodyParse.urlencoded({extended:false}))
// app.use(bodyParse.json())


// ------图片上传和获取form表单数据；
var multiparty = require('multiparty');


var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var md5 = require('md5-node');
var dbMoudle = require('./module/db.js');

var DBurl = 'mongodb://127.0.0.1:27017/merManage';


app.listen(8000);

app.set('view engine','ejs');

app.use(express.static('public'));
app.use('img',express.static('img'));


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
  var userName = req.body.userName;
  var password = md5(req.body.password);
  console.log(data);
  MongoClient.connect(DBurl,(err,db)=>{
    if(err){
      console.log('数据库连接失败');
    }else{
      var list = [];
      var curosr = db.collection('user').find({
        userName:userName,
        password:password
      });
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
      db.close();

    }
  })
})

app.get('/',(req,res)=>{
  res.send('hello world!!!!!');
})


app.get('/goods',(req,res)=>{

  MongoClient.connect(DBurl,(err,db)=>{
    if(err){
      console.log('数据库连接失败');
    }else{
      var list = [];
      dbMoudle.find('goodsList',{},(data)=>{
        list = data;
        res.render('index',{
          list:list
        });
      })
      // var result = db.collection('goodsList').find()
      //
      // result.toArray((err,data)=>{
      //   if(err){
      //     console.log('查询失败')
      //   }else{
      //     list = data;
      //     res.render('index',{
      //       list:list
      //     });
      //     db.close();
      //     console.log(data);
      //   }
      // })
    }
  })

})

app.get('/add',(req,res)=>{
  res.render('add');
})

app.post('/doAdd',(req,res)=>{

  var form = new multiparty.Form();

  form.uploadDir = 'img';

  form.parse(req, function(err, fields, files) {
    if(err){
      console.log('multiparty调用错误',err)
      res.redirect('/add');
      return;
    }

    console.log( fields )
    console.log( files )


  });



  // dbMoudle.add('goodsList',req.body,(status)=>{
  //   if( status ){
  //     res.redirect('/goods')
  //   }else{
  //     res.redirect('/add');
  //     res.send('<script>alert("添加失败")</script>')
  //   }
  // })
})

app.get('/edit',(req,res)=>{
  res.render('edit');
})

app.get('/doEdit',(req,res)=>{
  dbMoudle.edit('goodsList',{name:'嘿嘿嘿'},{name:'哈哈哈'},(status)=>{
    if(status){
      res.send('修改成功');
    }
  })
})
app.get('/doDelete',(req,res)=>{
  dbMoudle.delete('goodsList',{name:'睡觉吧'},(status)=>{
    if(status){
      res.send('删除成功');
    }
  })
})

app.get('/quit',(req,res)=>{
  req.session.destroy((err)=>{
    if(!err){
      console.log('销毁成功');
      res.redirect('login');
    }
  })
})



/*
    实现了点击修改后的数据加载，和页面跳转
    图片   配置多个静态文件托管
    实现了图片上传
    form表达数据和图片上传都用 Mulitparty 模块获取
*/
