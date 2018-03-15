var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
  res.send('用户页面')
})


module.exports = router;
