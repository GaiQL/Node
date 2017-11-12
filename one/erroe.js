var event = require('events');
var emitter = new event.EventEmitter;

emitter.emit('error');


/*

    EventEmitter定义了一个特殊的事件error，它包含了错误的语义
    我们在遇到异常的时候通常会触发error事件，当error被触发，
    EventEmitter规定如果没有响应的监听器，node.js会把它当成异常
    退出程序并输出错误信息。

    所以我们一般要为会触发error事件的对象设置监听器，
    避免遇到错误后整个程序崩溃。


*/
