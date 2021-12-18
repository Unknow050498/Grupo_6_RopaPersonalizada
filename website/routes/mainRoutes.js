const express = require('express');
const mainR = express.Router();

const mainC = require('../controllers/mainController');

mainR.get('/', mainC.home);
mainR.get('/login', mainC.login);


module.exports = mainR;