const express = require('express');
const usersR = express.Router();
const multer = require('multer');
const path = require('path');
const app = require('../app');
const permisionMiddle = require('../middleware/permisionMiddle');


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


usersR.get('/users', usersC.list);
usersR.get('/users/detailsU/:userName', usersC.detailsU);
usersR.get('/users/addUser', permisionMiddle, usersC.addUser);
usersR.post('/users/addUser', upload.single('uploadedImageUser'), usersC.createUser);
usersR.get('/users/edit/:userName', permisionMiddle, usersC.editU);
usersR.put('/users/edit/:userName', upload.single('uploadedImageUserEdit'), usersC.updateU);
usersR.delete('/users/delete/:userName', usersC.destroy);

module.exports = usersR;