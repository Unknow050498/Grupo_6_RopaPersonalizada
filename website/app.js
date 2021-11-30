const express = require('express');
const app = express();
const path = require('path');

/*==================== LLAMA A LOS ARCHIVOS DEL VIEWS ====================*/
app.get('/',(req, res) => {
    res.render(path.join(__dirname, 'views/index.ejs'));
});

app.get('/product',(req, res) => {
    res.render(path.join(__dirname, 'views/product.ejs'));
});

app.get('/login',(req, res) => {
    res.render(path.join(__dirname, 'views/login.ejs'));
});

app.get('/signup',(req, res) => {
    res.render(path.join(__dirname, 'views/signup.ejs'));
});

app.get('/shoppingcart',(req, res) => {
    res.render(path.join(__dirname, 'views/shoppingcart.ejs'));
});

app.set('view engine', 'ejs');
/*==================== CONECTA CON LA CARPETA PUBLIC ====================*/
app.use('/', express.static('public'));

/*==================== CABRE EL PUERTO 3000 ====================*/
app.listen(3000, () => {
    console.log('Corriendo servidor.');
}); 