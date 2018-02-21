
查看所有的数据库列表：

  show dbs


使用数据库，创建数据库：

  use stuend(xxx)

插入数据:

  db.表名.insert({"name":"zhangsan","age":10})
  插入数据后，数据库创建成功，集合(表)创建成功;

查找数据：

  1、查找所有数据：

    db.userinfo.find();

  2、查询去掉后的当前聚集集合中的某列的重复数据

    db.userinfo.find("name");
    会过滤掉name中相同的数据;

db.userinfo.find({"age":22});          查询age=22的数据;
db.userinfo.find({"age":{$gt:22}});    查询age>22的数据;
db.userinfo.find({"age":{$lt:22}});    查询age<22的数据;
db.userinfo.find({"age":{$gte:22}});   查询age>=22的数据;
db.userinfo.find({"age":{$lte:22}});   查询age<=22的数据;

db.userinfo.find({name:/mongo/})  查询name中包含mongo的数据;
db.userinfo.find({name:/^mongo/}) 查询name中以mongo开头的数据;

db.userinfo.find({},{name:1,age:1})
查询指定列的name、age数据,
当然name也可以用true或false,alse就是排除name,显示name以外的列信息;
db.userinfo.find({"age":{$gt:25},{name:1,age:1}})
找到age大于25的数据，并且只显示name和age

数据排序：
db.userinfo.find().sort({age:1});升序
db.userinfo.find().sort({age:-1});降序

分页：
db.userinfo.find().limit(5)   查询前5条数据
db.userinfo.find().skip(10)   查询10条以后的数据
db.userinfo.find().skip(5).limit(5)  查询5-10之间的数据

db.userinfo.find({"name":"zhangsan","age":10})  并且
db.userinfo.find({$or[{"age":10},{"age":5}]})   或者

db.userinfo.findOne();  查询第一条数据


db.userinfo.find().count()  同级数量


db.userinfo.remove({"age":123})  删除某一条数据
db.userinfo.drop()   删除某一集合（表）
db.user.dropDatabase()  删除某一数据库

db.userinfo.update({"age":10},{$set:{"age",10000}}) 修改数据，  不谢$set时是替换
