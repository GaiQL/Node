/*

      链式流：
          链式是通过连接输出流到另外一个流并创建多个对流操作链的机制；
          链式流一般用于管道操作；


*/
//使用管道和链式来压缩和解压文件；

var fs = require('fs');
var zlib = require('zlib');

// fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));

fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input.txt'));

console.log('程序执行完毕');
