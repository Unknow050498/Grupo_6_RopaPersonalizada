const express = require('express');
const app = express();
const path = require('path');


app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html/'));
});

app.use('/', express.static('public'));

app.listen(3000, () => {
    console.log('Corriendo servidor.');
}); 