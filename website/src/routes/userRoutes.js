const express = require('express');
const usersR = express.Router();
const multer = require('multer');
const path = require('path');
const app = require('../app');
const permisionMiddle = require('../middleware/permisionMiddle');
const {body} = require('express-validator');


const usersC = require('../controllers/userController');

//Validaciones
const validaCreateForm =[
    body('nameSignUp').notEmpty().withMessage('El campo de nombre no puede estar vacio'),
    body('nameSignUp').isLength({ min: 5 }).withMessage('El nombre completo debe ser de más de 5 caracteres'),
    body('usernameSignUp').notEmpty().withMessage('El campo de nombre no puede estar vacio'),
    body('usernameSignUp').isLength({ min: 3 }).withMessage('El nombre de usuario debe ser más de 3 caracteres'),    
    body('emailSignUp').isEmail().withMessage('El email debe ser un formato valido'),
    body('passwordSingUp').notEmpty().withMessage('El campo de contraseña no puede estar vacio'),
    body('nacimiento').notEmpty().withMessage('Porfavor coloca un fecha'),
    body('radioSex').notEmpty().withMessage('Elige un genero'),
    body('typeSignUp').notEmpty().withMessage('Asigna un cargo'),
];

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

usersR.get('/users',permisionMiddle, usersC.list);
usersR.get('/users/detailsU/:userName', permisionMiddle, usersC.detailsU);
usersR.get('/users/addUser', permisionMiddle, usersC.addUser);
usersR.post('/users/addUser', upload.single('uploadedImageUser'), validaCreateForm, usersC.createUser);
usersR.get('/users/edit/:userName', permisionMiddle, usersC.editU);
usersR.put('/users/edit/:userName', upload.single('uploadedImageUserEdit'), usersC.updateU);
usersR.delete('/users/delete/:userName', usersC.destroy);

module.exports = usersR;