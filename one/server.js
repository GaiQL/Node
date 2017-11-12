const http = require("http");
const url = require('url');
// 无论何时我们的服务器收到一个请求，这个函数就会被调用。
function start(route){
  //我们需要查看HTTP请求，从中提取出请求的URL以及GET/POST参数,我们需要的所有数据都会包含在request对象中
  //通过node所提供的url和querystring模块
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    //发送HTTP头部，HTTP状态值200：OK，内容类型：text/plain。
    response.writeHead(200, {"Content-Type": "text/plain"});

    route(pathname);

    response.write("Hello World");
    //end(),发送相应数据。
    response.end();
  }

  http.createServer(onRequest).listen(8888);

  console.log("Server has started.");
}



exports.start = start;


// 所以我们的代码就是：当收到请求时，
// 使用 response.writeHead() 函数发送一个HTTP状态200和HTTP头的内容类型（content-type），
// 使用 response.write() 函数在HTTP相应主体中发送文本“Hello World"。
// 最后，我们调用 response.end() 完成响应。

/*
      Npm 包管理工具，解决Nodejs代码部署上的很多问题，
      runxu用户从npm服务器下载别人编写的第三方包到本地使用，
      runxu用户从npm服务器下载并安装别人编写的命令行 程序到本地使用，
      runxu用户将自己编写的包或命令行程序上传到npm服务器供别人使用,

      本地安装 =》 npm install express 本地安装
      全局安装 =》 npm install express -g 全局安装

      --save     =》会把依赖包添加到package.json文件的dependencies下   (生产依赖)；
      --save-dev =》会把依赖包添加到package.json文件的devDependencies下(开发依赖)；

      当使用npm install –production或者注明NODE_ENV变量值为production时，只会下载dependencies中的模块。

*/

/*
      REPL  交互解释器， 表示一个电脑的环境
*/

/*
      异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。node所有API都支持回调函数
      node.js可以处理大量的并发请求，一遍读取文件，一遍执行其他命令，在文件读取完成后，
      我们将文件作为回调函数的参数返回，这样在执行代码时就没有阻塞或等待文件I/O操作。
*/

/*
      单线程应用程序，但是通过事件和回调支持并发，所以性能较高
      所有事件机制都是用设计模式中观察者模式实现
      每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数；

*/
/*
      事件驱动程序

      当web server接收到一个请求后，会把它关闭然后进行处理，去服务下一个web请求，
      当这个请求完成后，他被放回处理队列，当达到队列开头，这个结果被返回给用户。
      请求 --- 事件
      事件触发器 =》 事件 =》事件循环 =》 事件处理程序
      eventemitters ->event ->loop ->handlers

      非阻塞式IO，事件驱动IO
      在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数

      node中有多个内置的事件。通过events模块，实例化eventemitters类来绑定和监听事件
*/
