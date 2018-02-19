var events = require('events');

var EventEmitter = new events.EventEmitter();


//广播和接受广播


//监听to_parent的广播；
EventEmitter.on('to_parent',(data)=>{
  console.log(data);
  console.log('接受广播完毕');
})

setTimeout(()=>{
  console.log('开始广播')
  EventEmitter.emit('to_parent','嘿嘿嘿')
},3000)
