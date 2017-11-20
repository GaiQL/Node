
var http = require('http');
var url = require('url');

function start(router){
  http.createServer((request,response)=>{

    var pathname = url.parse(request.url).pathname;
    console.log('request for ' + pathname + ' received');

    router(pathname);

    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write('Hello Word!!!');
    response.end();

  }).listen(8888);

  console.log('Server has start');
}

exports.start = start;
