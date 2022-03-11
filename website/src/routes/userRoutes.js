const express = require('express');
const usersR = express.Router();
const multer = require('multer');
const path = require('path');
const app = require('../app');
const permisionMiddle = require('../middleware/permisionMiddle');
const {body} = require('express-validator');


const usersC = require('../controllers/userController');

// Imagenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img/users'))
    },
    filename: function (req, file, cb) {
        const newFilename = `user_${file.originalname}`
        cb(null, newFilename);
    }
});
const upload = multer({storage});

//Validaciones
const validaCreateForm =[
    body('nameSignUp').notEmpty().withMessage('El campo de nombre no puede estar vacio'),
    body('usernameSignUp').notEmpty().withMessage('El campo de nombre no puede estar vacio'),
    body('emailSignUp').isEmail().withMessage('El email debe ser un formato valido'),
    body('password').isEmpty().withMessage('El campo de contraseña no puede estar vacio'),
    body('nacimiento').isEmpty().withMessage('Porfavor coloca un fecha'),
    body('radioSex').isEmpty().withMessage('Elige un genero'),
    body('typeSignUp').isEmpty().withMessage('Asigna un cargo'),
];

usersR.get('/users', usersC.list);
usersR.get('/users/detailsU/:userName', usersC.detailsU);
usersR.get('/users/addUser', usersC.addUser);
usersR.post('/users/addUser', upload.single('uploadedImageUser'), validaCreateForm, usersC.createUser);
usersR.get('/users/edit/:userName', permisionMiddle, usersC.editU);
usersR.put('/users/edit/:userName', upload.single('uploadedImageUserEdit'), usersC.updateU);
usersR.delete('/users/delete/:userName', usersC.destroy);

module.exports = usersR;