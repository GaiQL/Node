/*

      //管道流

        管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据，
        并将数据传递到另一个流中;

        source -- dest;

*/
var fs = require('fs');
var  readerStream = fs.createReadStream('input.txt');
var  writeStream = fs.createWriteStream('output.txt');

//管道读写操作
//读取input.txt文件内容，并将文件写入到output.txt中；
readerStream.pipe(writeStream);

console.log('程序执行完毕');
