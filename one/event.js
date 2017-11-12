
/*

        继承EventEmitter:

        大多数的时候我们不会使用EventEmitter,而是在对象中继承他。
        包括fs  net  http在内的，只要是支持事件响应的核心模块都是
        EventEmitter的子类。

        Why do?

        具有某个实体功能的对象实现事件符合语义
        JS对象机制基于原型，支持部分多重继承，继承EventEmittet不会打乱对象原有的继承关系。


*/
var event = require('events');
//创建eventEmitter对象
var eventEmitter = new event.EventEmitter();  //事件触发器

//创建事件处理程序
var connectHandler = function connected(){
  console.log('连接成功');
  //触发data_received事件
  eventEmitter.emit('data_received');
}

//绑定connection事件处理程序
eventEmitter.on('connection',connectHandler);

//使用匿名绑定data_received事件处理程序
eventEmitter.on('data_received',function(){
  console.log('数据接收成功');
})

//触发connection事件
eventEmitter.emit('connection');

console.log('程序执行完毕');
//创建对象，实例化EventEmitter对象，on方法绑定事件和事件处理程序，emit方法触发事件

//I/O，即输入/输出端口。接口

/*

    node.js所有的异步I/O操作在完成时都会发送一个事件到事件队列；
    node.js里面的许多对象都会分发事件：
          net.server对象会在每次有新连接时分发一个事件
          fs.readStream对象会在每次有文件打开时分发一个事件
          所有这些产生事件的对象都是events.EventEmitter的实例。


    events模块只提供了一个对象：event.EventEmitter。这个对象的核心就是事件触发与
    事件监听器功能的封装。

    EventEmitter的每个事件由一个事件名和若干个参数（事件监听器）组成，
    当事件触发是，注册到这个事件的事件监听器依次被调用，事件参数作为回调函数参数传递。

*/



/*

    new event.EventEmitter.----------------------------------

    方法：
    on(event,listener)  为指定事件添加一个监听器，接受一个字符串event，和一个回调函数。

    once(event,listener)  为指定事件注册一个单词监听器，监听器只会触发一次，触发后立刻解除该监听器。

    addListener(event,listener)  为指定事件添加一个监听器到监听器数组的尾部

    removeListener(event,listener)  移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器，
    两个参数，接受事件名称，和回调函数

    removeAllListeners([event])  移除所有事件的所有监听器，若指定事件，移除指定事件的所有监听器。

    setMaxListeners(n)  默认情况下，添加的监听器超过十个就会输出警告信息，此函数用于提高监听器的默认限制数量

    listeners(event)  返回指定事件的监听器数组

    emit(event,[arg1],[arg2],[arg3],[...]) 按参数顺序执行每个监听器，如果事件有注册监听器返回true，没有返回false

    类方法：
    listenerCount(emitter,event)  返回指定事件的监听器数量。

    事件：
    newListener(event,listener)  该事件在添加新监听器时被触发;

    removeListener(event,listener)  从指定监听器数组中删除一个监听器，会改变剩余监听器索引

*/
