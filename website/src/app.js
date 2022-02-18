const express = require('express');
const app = express();
const path = require('path');

/*==================== LLAMA A LOS ARCHIVOS DEL VIEWS ====================*/
const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');

/*========================================================================*/
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

/*==================== CONECTA CON LA CARPETA PUBLIC ====================*/
app.use(express.static(path.join(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

app.use('/', mainRoutes);
app.use(productRoutes);
//app.use(userRoutes);

/*==================== CABRE EL PUERTO 3000 ====================*/
app.listen(3000, () => {
    console.log('Corriendo servidor.');
}); 

module.exports = app;