const express = require('express');
const productsR = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const productsC = require('../controllers/productsController');

productsR.get('/', productsC.index);

productsR.get('/create-new-product', productsC.createP);

var upload = multer({ storage: storage });
productsR.post('/', multer({ storage: storage }).single('fotoProducto'), productsC.product);

productsR.get('/detailsP', productsC.detailsP);

module.exports = productsR;