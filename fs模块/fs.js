
var fs = require('fs');
//检测文件还是目录；
fs.stat('fs.js',(err,stats)=>{

  if( err ){
    console.log(err);
    return false;
  }
  // console.log(stats);
  // console.log( '文件：' + stats.isFile() );
  // console.log( '目录：' + stats.isDirectory() );

})

//创建目录
//接受三个参数
// path:将创建的目录路径
// mode:目录权限（读写权限），默认0777
// callback:回调函数
// fs.mkdir('css',(err)=>{
//   if( err ){
//     console.log(err);
//     return
//   }
//   console.log('创建成功');
// })
let fn = function(a,b){
  return a+b
}
//接收四个参数   文件名称，写入内容，opetion数组对象（编码，读写权限，flage:默认‘w’），回调函数
//文件名称不存在会创建，存在的话会覆盖；
fs.writeFile('t.js','var fn = ' + fn,( err )=>{
  if(err){
    console.log(err);
    return false;
  }
  console.log('写入成功');
})



//追加文件  fs.appendFile
//和fs.writeFile相同，不过writeFile是覆盖行为，appendFile是追加行为；
//\n表示在文本里换行
fs.appendFile('one.txt','hahahaha\n',(err)=>{
  if(err){
    console.log(err);
    return
  }
  console.log('追加成功');
})


//用的比较多的  ---  fs.readFile(); 读取文件

fs.readFile('index.txt',(err,data)=>{
  if(err){
    console.log(err);
    return false;
  }
  console.log(data.toString());
})

//读取目录  data 返回目录下的所有文件和文件夹，数组返回

fs.readdir('html',(err,data)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log( data );
})

//重命名，用的也比较多
// rename   剪切和重命名
// fs.rename('html/index.js','html/data.js',(err)=>{
//   if(err){
//     console.log(err);
//     return false;
//   }
//   console.log( '重命名成功' );
// })

// 删除目录

    // fs.rmdir('heihei',(err)=>{
    //   if(err){
    //     console.log(err);
    //     return false;
    //   }
    //   console.log('删除目录成功');
    // })

// 删除文件

fs.unlink('heihei.js',(err)=>{
  if(err){
    console.log(err);
    return false;
  }
  console.log('删除文件成功');
})




/*

      1.fs.stat  isFile(),isDirectory() 检测是文件还是目录  err时没有
      2.fs.mkdir   创建目录
      3.fs.writeFile  创建写入文件
      4.fs.appendFile  创建追加文件
      5.fs.readFile  读取文件
      6.fs.readdir   读取目录
      7.fs.rename  重命名，剪切
      8.fs.rmdir 删除目录
      9.fs.unlink  删除文件

*/
