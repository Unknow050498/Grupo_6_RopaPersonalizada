const express = require('express');
const userR = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const userC = require('../controllers/userController');

userR.get('/register', userC.register);
userR.get('/users', userC.users);

var upload = multer({ storage: storage });
userR.post('/', multer({ storage: storage }).single('fotoUser'), userC.userN);

module.exports = userR;