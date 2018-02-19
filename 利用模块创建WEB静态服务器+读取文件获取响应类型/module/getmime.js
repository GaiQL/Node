// module.exports = function( mime ){
//   switch (mime) {
//     case '.html':
//       return 'text/html'
//       break;
//     case '.css':
//       return 'text/css'
//       break;
//     case '.js':
//       return 'text/javascript'
//       break;
//     default:
//       return 'text/html'
//
//   }
// }

var fs = require('fs');
// module.exports = function( mime,EventEmitter ){
//
//   //同步的方式读取文件；
//   // var data = fs.readFileSync('./mime.json');
//   // var json = JSON.parse(data.toString());
//   //
//   // return json[mime] || 'text/html'
//
//   //events模块，事件驱动读取数据：
//   fs.readFile('./mime.json',(err,data)=>{
//     if(err){
//       console.log(err);
//     }else{
//       console.log(data.toString());
//       EventEmitter.emit('sad',JSON.parse(data.toString())[mime]);
//     }
//   })
// }


module.exports = function( mime,callback ){

  //回调函数读取data
  fs.readFile('./mime.json',(err,data)=>{
    if(err){
      console.log(err);
    }else{
      callback(JSON.parse(data.toString())[mime])
      // EventEmitter.emit('sad',JSON.parse(data.toString())[mime]);
    }
  })
}
