const express = require('express');
const app = express();
const routes = require('./routes/mainRoutes');
const path = require('path');

/*==================== LLAMA A LOS ARCHIVOS DEL VIEWS ====================*/
app.use('/', routes);

/*========================================================================*/
app.set('view engine', 'ejs');

/*==================== CONECTA CON LA CARPETA PUBLIC ====================*/
app.use(express.static(path.join(__dirname, 'public')));

/*==================== CABRE EL PUERTO 3000 ====================*/
app.listen(3000, () => {
    console.log('Corriendo servidor.');
}); 


