var express = require('express');
var router = express.Router();

var login = require('./admin/login.js');
var product = require('./admin/product.js');
var user = require('./admin/user.js');

router.use('/login',login);
router.use('/product',product);
router.use('/user',user);


module.exports = router;
