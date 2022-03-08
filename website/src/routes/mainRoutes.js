const express = require('express');
const mainR = express.Router();
const guestMiddle = require('../middleware/guestMiddle');
const authMiddle = require('../middleware/authMiddle');

const mainC = require('../controllers/mainController');

mainR.get('/', mainC.home);
mainR.get('/login',guestMiddle, mainC.login);
mainR.post('/login', mainC.loginProcess);
mainR.get('/register',guestMiddle, mainC.register);
mainR.get('/logout', authMiddle, mainC.logout);


module.exports = mainR;