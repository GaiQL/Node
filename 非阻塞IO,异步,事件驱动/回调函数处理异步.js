var fs = require('fs');



function getMime(fn){
  fs.readFile('mime.json',(err,data)=>{
    fn(data);
  })
}

getMime((data)=>{
  console.log(data.toString());
})
