var http = require('http');
var app = require('./module/httprouter.js');
var ejs = require('ejs');
var server = http.createServer(app).listen(8080);


app.get('/login', function (req, res) {
  ejs.renderFile('./views/login.ejs',{},(err,data)=>{
    if(err){
      console.log(err);
      return
    }
    res.send(data);
  })
});

app.get('/dologin', function (req, res) {
  ejs.renderFile('./views/dologin.ejs',{},(err,data)=>{
    if(err){
      console.log(err);
      return
    }
    res.send('<script>alert("嘿嘿")</script>'+req.body);
  })
});

app.get('/', function (req, res) {
  res.send('index');
});
