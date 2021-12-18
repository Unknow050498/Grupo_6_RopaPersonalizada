const path = require('path');

const mainC = {
    home: (req, res) => {
        res.render('index');
    },
    login: (req,res) => {
        res.render('login');
    },
};

module.exports = mainC;