/*

  在Node的应用程序中，执行异步操作的函数将回调函数作为最后一个参数，
  回调函数接受错误对象为第一个参数。

*/

var fs = require('fs');

//fs.readFile()      =>      异步函数,用户读取文件。

fs.readFile('input.txt',function(err,data){
  //有错误就输出错误，终止函数，没有错误跳过
  if(err){
    console.log(err);
    return;
  }
  console.log(data.toString());   //toString 转成普通字符
})


console.log('程序执行完毕');
