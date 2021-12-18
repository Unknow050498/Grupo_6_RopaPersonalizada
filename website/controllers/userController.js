const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url'); 

const usersFilePath = path.join(__dirname, '../data/UsersDataBase.json');
let usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersC = {
    users: (req, res) => {
        res.render('users', {
            usersJSON
        });
    },
    register: (req, res) => {
        res.render('signup');
    },
    userN: (req, res) => {
        let newU = {
            id: usersJSON[usersJSON.length - 1].id + 1,
            ...req.body,
            image: req.file.filename
        };
        usersJSON.push(newU);
        fs.writeFileSync(usersFilePath, JSON.stringify(usersJSON, null, ' '));
        res.redirect('/users');
    },
}

module.exports = usersC;