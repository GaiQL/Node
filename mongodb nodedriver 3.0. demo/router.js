var http = require('http');
var app = require('./module/httprouter.js');

var MongoClient = require('mongodb').MongoClient
var DBurl = 'mongodb://127.0.0.1:27017'

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
  ejs.renderFile('./views/index.ejs',{},(err,data)=>{
    if(err){
      console.log(err);
      return
    }
    res.send(data);
  })
});

app.get('/add', function (req, res) {

  MongoClient.connect(DBurl,function(err,client){
    if(err){
      console.log('数据库连接失败');
      return;
    };
    const db = client.db('first');
    //连接first数据库中的user集合，insertOne增加一条数据。
    db.collection('user').createIndex(
      { "name": 1 }
    ,{dropDups:true},function(err,results){
      if(err){
        console.log('创建唯一索引失败');
      }else{
        console.log('创建唯一索引成功');
      }
    })
    db.collection('user').insertMany([{
      "name":"tiantian1",
      "age":23
    },{
      "name":"zhouying1",
      "age":32
    },{
      "name":"dapeng1",
      "age":41
    }],function(err){
      if(err){
        console.log('添加失败');
        return;
      }else{
        res.send('增加成功哦');
      }
      client.close()
    })
  })

});

app.get('/update', function (req, res) {

  MongoClient.connect(DBurl,function(err,client){
    if(err){
      console.log('数据库连接失败');
      return;
    };
    const db = client.db('first');
    //连接first数据库中的user集合，insertOne增加一条数据。
    db.collection('user').updateOne({
      "name":"zhibin"
    },{$set:{"name":"bigzhibin"}},function(err){
      if(err){
        console.log('修改失败');
        return;
      }else{
        res.send('修改成功哦');
      }
      client.close()
    })
  })

});

app.get('/remove', function (req, res) {

  MongoClient.connect(DBurl,function(err,client){
    if(err){
      console.log('数据库连接失败');
      return;
    };
    //连接first数据库中的user集合，insertOne增加一条数据。
    const db = client.db('first');
    db.collection('user').deleteOne({
      "name":"zhibin"
    },function(err){
      if(err){
        console.log('删除失败');
        return;
      }else{
        res.send('删除成功哦');
      }
      client.close()
    })
  })

});
