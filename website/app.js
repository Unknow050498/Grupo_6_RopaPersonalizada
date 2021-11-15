const express = require('express');
const app = express();
const path = require('path');

/*==================== LLAMA A LOS ARCHIVOS DEL VIEWS ====================*/
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/producto',(req, res) => {
    res.sendFile(path.join(__dirname, 'views/producto.html'));
});

/*==================== CONECTA CON LA CARPETA PUBLIC ====================*/
app.use('/', express.static('public'));

/*==================== CABRE EL PUERTO 3000 ====================*/
app.listen(3000, () => {
    console.log('Corriendo servidor.');
}); 