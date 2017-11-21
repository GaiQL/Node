
/*

    node.js全局对象：

      全局对象(Global Object)

      global 最根本的作用是作为全局变量的宿主

          当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，
      反之亦然。需要注 意的是，在 Node.js 中你不可能在最外层定义变量，
      因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。


      __filename:
          表示当前正在执行脚本的文件名，他将输出文件所在位置的绝对路径，
      且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是
      模块文件的路径。

      __dirname:
          表示当前执行脚本所在的目录。

      setTimeout(function,1000);

*/


// console.log(__filename);
// console.log(__dirname);

// setTimeout(()=>{console.log('Hello world')},1000)
// setInterval(()=>{console.info('Hello world')},2000)

/*

    process是一个全局变量，即global对象的属性；
    它用于描述当前Node.js进程的状态，提供了一个与操作系统的简单接口

    porcess对象：
      exit:当进程准备退出时触发
      beforeExit:当node清空事件循环，并且没有其他安排时触发这个事件
      uncaughtException:当一个异常冒泡回到事件循环，触发这个事件
      signal:当进程接受到信号时就触发。


*/
console.log(process.uptime())
// process.on('exit',(code)=>{
//   setTimeout(function() {
//     console.log("该代码不会执行");
//   }, 0);
//   console.log('退出码为'+code);
// })
// console.log('程序执行结束')
