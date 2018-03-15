var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
  res.send('登录页面')
})


module.exports = router;
