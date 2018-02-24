var MongoClient = require('mongodb').MongoClient;
var DBurl = 'mongodb://127.0.0.1:27017/merManage';

function __connect( callback ){

  MongoClient.connect(DBurl,(err,db)=>{

    if(err){
      console.log('数据库连接失败');
      return
    }

    callback(db);

  })
}

exports.find = function(collection,obj,callback){
  __connect((db)=>{

    var list = db.collection(collection).find(obj);
    list.toArray((err,data)=>{
      if(err){
        console.log('查询失败');
      }else{
        callback(data);
      }
      db.close();
    })

  })
}

exports.add = function(collection,obj,callback){
  __connect((db)=>{
    db.collection(collection).insertOne(obj,(err)=>{
      if(err){
        console.log('添加失败');
        callback(0);
      }else{
        console.log('添加成功');
        callback(1);
      }
      db.close();
    })
  })
}

exports.edit = function(collection,obj,editObj,callback){
  __connect((db)=>{
    db.collection(collection).updateOne(obj,{$set:editObj},(err)=>{
      if(err){
        console.log('修改失败');
        callback(0);
      }else{
        console.log('修改成功');
        callback(1);
      }
      db.close();
    })
  })
}

exports.delete = function(collection,obj,callback){
  __connect((db)=>{
    db.collection(collection).deleteOne(obj,(err)=>{
      if(err){
        console.log('删除失败');
        callback(0);
      }else{
        console.log('删除成功');
        callback(1);
      }
      db.close();
    })
  })
}
