/*

        stream  是一个抽象接口

        node.js中stream有四种流类型：
            readable -- 可读操作
            writeable -- 可写操作
            duplex -- 可读可写操作
            transform -- 操作被写入数据，然后读出结果。

        stream 对象 都是EventEmitter的实例，常用的事件有：

            data -- 当有数据可读时触发
            end -- 没有更多的数据可读时触发
            error -- 在接受和写入过程中发生错误时触发
            finish -- 所有数据已被写到底层系统时触发


        从流中读取数据：




*/

var data = '';
var fs = require('fs');

//创建可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码为‘utf-8’
readerStream.setEncoding('UTF8')

//处理流事件  -->  data,end,and error
readerStream.on('data',(chunk)=>{
  data += chunk;
})

readerStream.on('end',()=>{
  console.log(data);
})

readerStream.on('error',(err)=>{
  console.log(err)
})

console.log('程序执行完毕');
