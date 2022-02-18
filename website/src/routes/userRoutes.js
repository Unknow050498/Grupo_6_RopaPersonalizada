const express = require('express');
const userR = express.Router();
const multer = require('multer');
/*
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const userC = require('../controllers/userController');

userR.get('/user', userC.users);

var upload = multer({ storage: storage });
userR.post('/users', multer({ storage: storage }).single('foto'), userC.userN);

module.exports = userR;*/