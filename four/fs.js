var fs = require('fs');

/*
        fs.open(path,flags,[mode],callback);
        打开文件
        path:文件路径
        flage:文件打开的行为
        mode:设置文件模式（权限），文件创建默认权限为0666（可读可写）；
        callback:回掉函数


        flage参数：
                      r	以读取模式打开文件。如果文件不存在抛出异常。
                      r+	以读写模式打开文件。如果文件不存在抛出异常。
                      rs	以同步的方式读取文件。
                      rs+	以同步的方式读取和写入文件。
                      w	以写入模式打开文件，如果文件不存在则创建。
                      wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
                      w+	以读写模式打开文件，如果文件不存在则创建。
                      wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
                      a	以追加模式打开文件，如果文件不存在则创建。
                      ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
                      a+	以读取追加模式打开文件，如果文件不存在则创建。
                      ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。

        读取文件信息
        通过异步模式获取文件信息的语法格式：
        fs.stat(path,callback);
        path - 文件路径;
        callback - 带有两个对象，err 和 start  =>  fs.stats对象

        starts类中的方法：

            stats.isFile()	如果是文件返回 true，否则返回 false。
            stats.isDirectory()	如果是目录返回 true，否则返回 false。
            stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
            stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
            stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
            stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
            stats.isSocket()	如果是 Socket 返回 true，否则返回 false。


        写入文件：
          异步模式下写入文件的语法格式：
          fs.writeFile(file,data,[options],callback);
          如果文件存在，该方法写入的内容会覆盖旧的文件内容
          file - 文件名或文件描述
          data - 要写入文件的数据，可以是String或Bufferd对象；
          opetions - 该参数是一个对象{encoding,mode,flage},默认编码为utf-8,模式为0666,flag为'W';
          callback - 只包含错误信息参数，在写入失败时返回；
*/

//读取文件
//异步
// fs.readFile('input.txt',(err,data)=>{
//   if(err){
//     return  console.log(err);
//   }
//   console.log('异步读取'+data.toString())
// })
// //同步
// var data = fs.readFileSync('input.txt');
// console.log('同步读取'+data.toString());
//
// console.log('程序执行完毕');

// console.log('文件准备打开');
// fs.open('input.txt','r+',function(err,fd){
//   if(err){
//     return console.log(err);
//   }
//   console.log('文件打开完毕')
// })
// fs.stat('input.txt',function(err,stats){
//   console.log(stats.isFile());
// })


// console.log('准备打开文件！');
// fs.stat('input.txt',function(err,stats){
//   if(err){
//     return console.log(err);
//   }
//   console.log('文件信息获取完毕');
//   console.log(stats);
//
//   console.log('是不是文件 = ' + stats.isFile())
//   console.log('是不是目录 = ' + stats.isDirectory())
// })


console.log('准备写入文件');
fs.writeFile('input.txt','我是通过写入的文件内容',function(err){
  if(err){
    return console.log(err);
  }
  console.log('文件写入成功');
  console.log('哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈');
  fs.readFile('input.txt',(err,data)=>{
    if(err){
      return console.log(err);
    }
    console.log(data.toString());
    console.log('文件读取成功');
  })
})
