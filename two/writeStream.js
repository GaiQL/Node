var fs = require('fs');
var data = '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈';

//创建一个可以写入的流，写到文件output.txt中；
var writeStream = fs.createWriteStream('output.txt');

//使用utf8编码写入数据；
writeStream.write(data,'UTF8');

//标记文本末尾；
writeStream.end();

//处理流事件 --> data,end,and error;
writeStream.on('finish',()=>{
  console.log('写入完成');
})

writeStream.on('error',(err)=>{
  console.log(err);
})

console.log('程序执行完毕');
