var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParse = require('body-parser');
var DBurl = 'mongodb://127.0.0.1:27017/merManage';

var app = new express;

app.listen(8000);

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())


app.set('view degnic','ejs');

app.get('/login',(req,res)=>{
  res.render('login');
  //获取前端发来的用户名密码，查看数据库中是否有匹配
  //匹配后在数据库中存储session
  //
})

app.get('/',(req,res)=>{
  res.send('hello world!!!!!');
})

app.post('/goods',(req,res)=>{

  var data = req.body;
  console.log(data);
  MongoClient.connect(DBurl,(err,db)=>{
    if(err){
      console.log('数据库连接失败');
    }else{
      var list = [];
      var curosr = db.collection('user').find(data);

      //另一种遍历数据的方法
      curosr.toArray((err,data)=>{
        if( data.length ){
          res.render('index');
        }else{
          res.send('<script>alert("您输入的账号密码不存在哦...");location.href="/login"</script>')
        }
      })

      // curosr.each((err,doc)=>{
      //   if( err ){
      //     console.log(err);
      //   }else{
      //     if( doc != null ){
      //       list.push(doc);
      //     }else{
      //       if( list.length ){
      //         res.render('index');
      //       }else{
      //         res.send('<script>alert("您输入的账号密码不存在哦...")</script>')
      //       }
      //     }
      //   }
      // })

    }
  })
  console.log(req.body)
})

app.get('/goodsAdd',(req,res)=>{
  res.render('add');
})

app.get('/goodsEdit',(req,res)=>{
  res.render('edit');
})
