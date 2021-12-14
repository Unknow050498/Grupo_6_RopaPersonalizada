const express = require('express');
const mainC = require('../controllers/mainController');
const mainR = express.Router();

mainR.get('/', mainC.home);
mainR.get('/product', mainC.product);
mainR.get('/login', mainC.login);
mainR.get('/signup', mainC.signup);
mainR.get('/shoppingcart', mainC.shoppingcart);
mainR.get('/productadd', mainC.productadd);


module.exports = mainR;