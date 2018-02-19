var fs = require('fs');

var stream = fs.createReadStream('input.txt');

var str = ''  /*保存数据,*/
var count = 0 /*次数*/
//因为流的方式是一块块的读取数据，文件大时datah会触发多次
//当文件较大建议用流的方式去读取，不会卡死。
stream.on('data',(data)=>{
  str += data;
  count++;
})

stream.on('end',(err)=>{
  console.log(str);
  console.log(count);
  console.log('读取完成');
})

stream.on('error',(err)=>{
  console.log(err);
})
