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

*/
