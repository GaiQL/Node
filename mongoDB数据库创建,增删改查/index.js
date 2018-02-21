
索引

    索引是对数据库表中一列或多列的值进行排序的一种结构，可以让我们查询数据库变得更快。
    MongDB的索引几乎与传统的关系型数据库一模一样，这其中也包括一些基本的查询优化技巧。

    数字1表示uername键的索引按升序存储，-1表示username键的索引按将降序方式存储。

    创建索引的命令:db.user.ensureIndex({"username":1});

    获取当前集合的索引的命令:db.user.getIndexes();

    删除索引的命令:db.user.dropIndex({"username":1});

复合索引

    db.user.ensureIndex({"username":1,"age":-1});

    该索引被创建以后，基于uername和age的查询将会用到该索引，或者是基于uername
  的查询也会用到该索引，但是只是基于age的查询不会用到该索引。
    查询条件中的键值索引和复合索引中的创建顺序不一致时，MongoDB会智能识别

唯一索引

    db.user.ensureIndex({"userid":1},{"unique":true});
    创建唯一索引后，
    如果再次插入userid重复的文档时，MongoDB将报错，以提示插入重复键。
    如果插入的文档不包含userid键，那么该文档中该键的值为null，如果多次插入类似的文档，MonngoDB将会报出同样错误。

索引参数:

    background:true,为现有数据加索引时不会阻塞其他操作，但效率相对false会低一些，但false会阻塞

    name:string,无序和有序。

    unique:true,建立唯一索引。

    dropDups:true,在建立唯一索引时删除重复记录。

使用explain:

    db.tablename.find().explain( "executionStats" );  查询具体的执行时间;

    关注输出的如下数值:explain,executionStats.executionTimeMillis。
