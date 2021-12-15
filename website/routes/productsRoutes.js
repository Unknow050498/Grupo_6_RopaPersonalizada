const express = require('express');
const productsR = express.Router();

const productsC = require('../controllers/productsController');

productsR.get('/', productsC.index);

productsR.get('/create-new-product', productsC.createP);

productsR.post('/detailsP', productsC.detailsP);

module.exports = productsR;