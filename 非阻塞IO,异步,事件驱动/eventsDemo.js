var events = require('events');
var fs = require('fs');
var EventEmitter = new events.EventEmitter;

function getMime(){
  fs.readFile('mime.json',(err,data)=>{
    if(err){
      console.log(err);
    }else{
      EventEmitter.emit('happy',data)
    }
  })
}
getMime()
EventEmitter.on('happy',(data)=>{
  console.log(data.toString());
})
