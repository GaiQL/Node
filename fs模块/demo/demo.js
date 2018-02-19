var fs = require('fs');
//判断服务器上面有没有upload目录，没有创建这个目录。（ 常用图片上传 ）

// fs.stat('html',(err)=>{
//   if(err){
//     // console.log('文件不存在');
//     fs.mkdir('html',(err)=>{
//       if(err){
//         console.log(err);
//         return;
//       }
//       console.log('文件创建成功');
//     })
//   }else{
//     console.log('文件存在');
//   }
// })


//找出html目录下面的所有目录，然后打印出来

let arr = [];
fs.readdir('html',(err,data)=>{
  if(err){
    console.log(err);
  }else{
    //函数自执行，递归调用
    (function getFile(i){
      fs.stat('html/' + data[i],(err,stats)=>{
        if( i == data.length ){
          console.log(arr);
          return;
        }
         if(err){
           console.log(err);
           return;
         }
         if(stats.isDirectory()){
           arr.push(data[i]);
         };
         getFile(i+1);
       })
    })(0)
  }
  // console.log(data);
  // let arr = [];
  // data.forEach((e,i)=>{
  //   fs.stat('html/' + e,(err,stats)=>{
  //     if(err){
  //       console.log(err);
  //       return;
  //     }
  //     if(stats.isDirectory()){
  //       arr.push(e);
  //     };
  //     if(i == data.length-1){
  //       console.log(arr)
  //     }
  //   })
  // })
  // console.log(arr);
})
