var fs = require('fs');

var stream = fs.createWriteStream('output.txt');
var data = '嘿嘿嘿嘿，这是写入的数据哦\n'

stream.write(data,'utf-8');

//标记写入完成，触发finish事件
stream.end();

stream.on('finish',()=>{
  console.log('写入完成');
})

stream.on('error',()=>{
  console.log('写入失败');
})
