const express = require('express');
const app = express();
const path = require('path');

/*==================== CONECTA CON LA CARPETA PUBLIC ====================*/
app.use(express.static(path.join(__dirname, './public')));

/*==================== LLAMA A LOS ARCHIVOS DEL VIEWS ====================*/
const mR = require('./routes/mainRoutes');
const pR = require('./routes/productsRoutes');
const uR = require('./routes/userRoutes');

app.use('/', mR);
app.use('/products', pR);
app.use('/users', uR);


/*========================================================================*/
app.set('view engine', 'ejs');

/*==================== CABRE EL PUERTO 3000 ====================*/
app.listen(3000, () => {
    console.log('Corriendo servidor.');
}); 

module.exports = app;