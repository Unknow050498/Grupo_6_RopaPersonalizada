const express = require('express');
const productsR = express.Router();
const multer = require('multer');
const path = require('path');
const app = require('../app');
const permisionMiddle = require('../middleware/permisionMiddle');


const productsC = require('../controllers/productsController');

// Imagenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img'))
    },
    filename: function (req, file, cb) {
        const newFilename = `IMG${file.originalname}`
        cb(null, newFilename);
    }
});
const upload = multer({storage});
//const uploadMulty = multer({storage,}).any('uploadedImages');


productsR.get('/products', productsC.list);
productsR.get('/products/detailsP/:model', productsC.detailsP);
productsR.get('/products/addStock', permisionMiddle, productsC.addStock);
productsR.post('/products/addStock', upload.single('uploadedImageStock'), productsC.createStock);
productsR.get('/products/addProduct', permisionMiddle, productsC.addProduct);
productsR.post('/products/addProduct', upload.single('uploadedImage'), productsC.createProduct);

module.exports = productsR;