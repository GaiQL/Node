var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
  res.send('商品列表')
})

router.get('/remove',(req,res)=>{
  res.send('删除商品')
})


router.get('/add',(req,res)=>{
  res.send('增加商品')
})


router.get('/edit',(req,res)=>{
  res.send('编辑商品')
})


module.exports = router;
