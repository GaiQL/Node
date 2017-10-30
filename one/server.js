const http = require("http");
const url = require('url');
// 无论何时我们的服务器收到一个请求，这个函数就会被调用。
function start(route){
  //我们需要查看HTTP请求，从中提取出请求的URL以及GET/POST参数,我们需要的所有数据都会包含在request对象中
  //通过node所提供的url和querystring模块
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});

    route(pathname);

    response.write("Hello World");
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
