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

          异步模式下读取文件的语法格式：
            fs.read(fd,buffer,offset,length,position,callback);
            =》该方法使用了文件描述符来读取文件
            fd : 通过fs.open()方法返回的文件描述符；
            buffer : 数据写入的缓冲区;
            offset : 缓冲区写入的写入偏移量;
            length : 要从文件中读取的字节数;
            position : 文件读取的起始位置，如果position的值为null，则会从当前文件指针的位置读取
            callback : 回调函数，有三个参数,err为错误信息,bytesRead表示读取的字节数,buffer为缓冲区对象

            fs.close(fd,callback)
            异步模式下关闭文件文件的语法格式；
            fd : 通过fs.open()方法返回的文件描述符;
            callback : 回调函数，没有参数;


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


// console.log('准备写入文件');
// fs.writeFile('input.txt','真的神奇',function(err){
//   if(err){
//     return console.log(err);
//   }
//   console.log('文件写入成功');
//   console.log('哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈');
//   fs.readFile('input.txt',(err,data)=>{
//     if(err){
//       return console.log(err);
//     }
//     console.log(data.toString());
//     console.log('文件读取成功');
//   })
// })

//
// var buf = new Buffer(1024);
// console.log('准备打开已存在的文件');
// fs.open('input.txt','r+',(err,fd)=>{
//   if(err){
//     return console.log(err);
//   }
//   console.log(fd);
//   console.log('文件打开成功');
//   console.log('准备读取文件');
//   fs.read(fd,buf,0,buf.length,0,(err,bytesRead)=>{
//     if(err){
//       return console.log(err);
//     }
//     console.log(bytesRead + '字节被读取');
//     if(bytesRead > 0){
//       console.log(buf.slice(0,bytesRead).toString());
//     }
//     fs.close(fd,(err)=>{
//       if(err){
//         return console.log(err);
//       }
//       console.log('文件关闭成功');
//     })
//   });
// })
//
// fs.mkdir("tmp/test",(err)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log('目录创建成功');
// })
// 
// fs.readdir("tmp",(err,file)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(file);
//   })
  // fs.mkdir("tmp/haha",(err)=>{
  //   if(!err){
  //     console.log('执行成功')
  //   }
  // })
//
// fs.rmdir("tmp",(err)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log('执行成功');
// })
