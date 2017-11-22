var fs = require('fs');

/*
        fs.open(path,flags,[mode],callback);
        打开文件
        path:文件路径
        flage:文件打开的行为
        mode:设置文件模式（权限），文件创建默认权限为0666（可读可写）；
        callback:回掉函数
*/

//读取文件
//异步
fs.readFile('input.txt',(err,data)=>{
  if(err){
    return  console.log(err);
  }
  console.log('异步读取'+data.toString())
})
//同步
var data = fs.readFileSync('input.txt');
console.log('同步读取'+data.toString());

console.log('程序执行完毕');
