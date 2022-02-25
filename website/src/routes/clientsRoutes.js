const express = require('express');
const clientsR = express.Router();
const multer = require('multer');
const path = require('path');
const app = require('../app');

const clientsC = require('../controllers/clientsController');

// Imagenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img/clients'))
    },
    filename: function (req, file, cb) {
        const newFilename = `cli_${file.originalname}`
        cb(null, newFilename);
    }
});
const upload = multer({storage});


clientsR.get('/clients', clientsC.list);
clientsR.get('/clients/detailsCli/:userName', clientsC.detailsCli);
clientsR.get('/clients/addCli', clientsC.addCli);
clientsR.post('/clients/addCli', upload.single('uploadedImageCli'), clientsC.createCli);
clientsR.get('/clients/edit/:userName', clientsC.editCli);
clientsR.put('/clients/edit/:userName', upload.single('uploadedImageCliEdit'), clientsC.updateCli);
clientsR.delete('/clients/delete/:userName', clientsC.destroy);

module.exports = clientsR;