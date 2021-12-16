const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url'); 

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let productsJSON = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsC = {
    index: (req, res) => {
        res.render('products', {
            productsJSON
        });
    },
    createP: (req, res) => {
        res.render('productAdd');
    },
    product: (req, res) => {
        let newP = {
            id: productsJSON[productsJSON.length - 1].id + 1,
            ...req.body,
            image: req.file.filename
        };
        productsJSON.push(newP);
        fs.writeFileSync(productsFilePath, JSON.stringify(productsJSON, null, ' '));
        res.redirect('/products');
    },
    detailsP: (req, res) => {
        const id = req.params.id;
        const product = productsJSON.find(product => product.id === id);
        res.render('detail-product', {
            product
        });
    },
    
}

module.exports = productsC;