const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const userLoggedMiddle = require('./middleware/userLoggedMiddle');
const cookies = require('cookie-parser');

/*==================== LLAMA A LOS ARCHIVOS DEL VIEWS ====================*/
const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');
const clientsRoutes = require('./routes/clientsRoutes');

/*========================================================================*/
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

/*==================== CONECTA CON LA CARPETA PUBLIC ====================*/
app.use(express.static(path.join(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use(session({
    secret:'sesion',
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddle);



app.use('/', mainRoutes);
app.use(productRoutes);
app.use(userRoutes);
app.use(clientsRoutes);

/*==================== CABRE EL PUERTO 3000 ====================*/
app.listen(3000, () => {
    console.log('Corriendo servidor.');
}); 

module.exports = app;