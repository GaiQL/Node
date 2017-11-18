
/*

      Node.js 提供了 exports 和 require 两个对象，
      其中 exports 是模块公开的接口，
      require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

      服务端的模块加载顺序，和查找过程；
*/


var hello = require('./hello');
//exports.word输出一个方法
// hello.word();

//module.exports输出的一个对象
hello = new hello;
hello.setName('哈哈');
hello.sayHello();
