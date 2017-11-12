var event = require('events');
var eventEmitter = new event.EventEmitter;
// 2 个监听器监听连接事件。
// 监听器 listener1 执行。
// 监听器 listener2 执行。
// listener1 不再受监听。
// 监听器 listener2 执行。
// 1 个监听器监听连接事件。
// 程序执行完毕。
var listener1 = function(){
  console.log('监听器listener1执行');
}

var listener2 = function(){
  console.log('监听器listener2执行');
}

eventEmitter.on('first',listener1);
eventEmitter.on('first',listener2);

var con = event.EventEmitter.listenerCount(eventEmitter,'first');
console.log(con+'个监听器在监听');

eventEmitter.emit('first');

eventEmitter.removeListener('first',listener1);
console.log('listener1应该是不再监听了哈哈哈哈哈');

eventEmitter.emit('first');

var con = event.EventEmitter.listenerCount(eventEmitter,'first');
console.log(con+'个监听器在监听');

console.log('程序执行完毕')
