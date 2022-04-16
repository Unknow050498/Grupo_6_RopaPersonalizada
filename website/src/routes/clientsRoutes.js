const express = require('express');
const clientsR = express.Router();
const multer = require('multer');
const path = require('path');
const app = require('../app');
const permisionMiddle = require('../middleware/permisionMiddle');
const {body} = require('express-validator');

const clientsC = require('../controllers/clientsController');

//Validaciones
const validaCreateFormCli =[
    body('nameSignUpCli').notEmpty().withMessage('El campo de nombre no puede estar vacio'),
    body('nameSignUpCli').isLength({ min: 5 }).withMessage('El nombre completo debe ser de más de 5 caracteres'),
    body('ClinameSignUpCli').notEmpty().withMessage('El campo de nombre de usuario no puede estar vacio'),
    body('ClinameSignUpCli').isLength({ min: 3 }).withMessage('El nombre de usuario debe ser más de 3 caracteres'),    
    body('emailSignUpCli').isEmail().withMessage('El email debe ser un formato valido'),
    body('passwordSingUpCli').notEmpty().withMessage('El campo de contraseña no puede estar vacio'),
    body('nacimientoCli').notEmpty().withMessage('Porfavor coloca un fecha'),
    body('radioSexCli').notEmpty().withMessage('Elige un genero'),
    body('terms_conditionsCli').notEmpty().withMessage('Debes aceptar los términos y condiciones'),
];

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

clientsR.get('/clients',permisionMiddle,  clientsC.list);
clientsR.get('/clients/detailsCli/:userName', clientsC.detailsCli);
clientsR.get('/clients/addCli', permisionMiddle, clientsC.addCli);
clientsR.post('/clients/addCli', upload.single('uploadedImageCli'), validaCreateFormCli, clientsC.createCli);
clientsR.get('/clients/edit/:userName', permisionMiddle, clientsC.editCli);
clientsR.put('/clients/edit/:userName', upload.single('uploadedImageCliEdit'), clientsC.updateCli);
clientsR.delete('/clients/delete/:userName', clientsC.destroy);

module.exports = clientsR;