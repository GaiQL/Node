var http = require('http');
var app = require('./module/httprouter.js');

var MongoClient = require('mongodb').MongoClient
var DBurl = 'mongodb://127.0.0.1:27017/first'

var ejs = require('ejs');
var server = http.createServer(app).listen(8080);


// app.get('/login', function (req, res) {
//   ejs.renderFile('./views/login.ejs',{},(err,data)=>{
//     if(err){
//       console.log(err);
//       return
//     }
//     res.send(data);
//   })
// });
//
// app.get('/dologin', function (req, res) {
//   ejs.renderFile('./views/dologin.ejs',{},(err,data)=>{
//     if(err){
//       console.log(err);
//       return
//     }
//     res.send('<script>alert("嘿嘿")</script>'+req.body);
//   })
// });

app.get('/', function (req, res) {

  MongoClient.connect(DBurl,function(err,db){
    if(err){
      console.log('数据库连接失败');
      return;
    };
    //连接first数据库中的user集合，insertOne增加一条数据。
    var list = [];
    var curosr = db.collection('user').find();
    curosr.each((err,doc)=>{
      if( err ){
        console.log(err);
      }else{
        if( doc != null ){
          list.push( doc );
        }else{
          ejs.renderFile('./views/index.ejs',{list:list},(err,data)=>{
            if(err){
              console.log(err);
              return
            }
            res.send(data);
          })
        }
      }
    })
  })

});

app.get('/add', function (req, res) {

  MongoClient.connect(DBurl,function(err,db){
    if(err){
      console.log('数据库连接失败');
      return;
    };
    //连接first数据库中的user集合，insertOne增加一条数据。
    db.collection('user').insertOne({
      "name":"kaiqi",
      "age":5
    },function(err){
      if(err){
        console.log('添加失败');
        return;
      }else{
        res.send('增加成功哦');
      }
      db.close()
    })
  })

});

app.get('/remove', function (req, res) {

  MongoClient.connect(DBurl,function(err,db){
    if(err){
      console.log('数据库连接失败');
      return;
    };
    //连接first数据库中的user集合，insertOne增加一条数据。
    db.collection('user').deleteOne({
      "name":"why"
    },function(err){
      if(err){
        console.log('删除失败');
        return;
      }else{
        res.send('删除成功哦');
      }
      db.close()
    })
  })

});
