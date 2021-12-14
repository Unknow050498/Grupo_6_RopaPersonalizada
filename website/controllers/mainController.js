const path = require('path');

const mainC = {
    home: (req, res) => {
        res.render('index')
    },
    product: (req, res) => {
        res.render('product');
    },
    login: (req, res) => {
        res.render('login');
    },
    signup: (req, res) => {
        res.render('signup');
    },
    shoppingcart: (req, res) => {
        res.render('shoppingcart');
    },
    productadd: (req, res) => {
        res.render('productadd');
    }
};

module.exports = mainC;