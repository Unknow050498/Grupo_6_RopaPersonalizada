const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");
const db = require("../database/models");
const sequelize = db.sequelize;
const bcryptjs = require('bcryptjs');

//const ClientsFilePath = path.join(__dirname, '../data/ClientsDataBase.json');
//let ClientsJSON = JSON.parse(fs.readFileSync(ClientsFilePath, 'utf-8'));

const Client = db.Client;

const ClientsC = {
  list: (req, res) => {
    Client.findAll()
      .then(function (clientes) {
        res.render("clients.ejs", {clientes});
      })
      .catch((error) => {
        res.send(error);
      });
  },
  addCli: (req, res) => {
    res.render("signup.ejs");
  },
  createCli: function (req, res) {
    let passhash = bcryptjs.hashSync(req.body.passwordSingUpCli, 10);
    if (req.file) {
      Client.create({
        username: req.body.ClinameSignUpCli,
        name: req.body.nameSignUpCli,
        email: req.body.emailSignUpCli,
        password: passhash,
        dateborn: req.body.nacimientoCli,
        sex:req.body.radioSexCli,
        imgCli: req.file.filename,
      })
        .then(function () {
          return res.redirect("/clients");
        })
        .catch((error) => res.send(error));
    } 
  },
  detailsCli: (req, res) => {
    const userName = req.params.userName;
    Client.findByPk(userName)
      .then(function (cliente) {
        res.render("clientDetail", {cliente});
      })
      .catch((error) => res.send(error));
  },
  editCli: (req, res) => {
    const username = req.params.userName;
    Client.findByPk(username)
      .then(function (cliente) {
        res.render("clientEdit", {cliente});
      })
      .catch((error) => res.send(error));
  },
  updateCli: function (req, res) {
    const username = req.params.userName;
    if(req.file){
      Client.update({
        username: req.body.ClinameSignUpCli,
        name: req.body.nameSignUpCli,
        email: req.body.emailSignUpCli,
        password: req.body.passwordSingUpCli,
        dateborn: req.body.nacimientoCli,
        sex:req.body.radioSexCli,
        imgCli: req.file.filename,
      },
      {
          where: {username: username}
      })
        .then(function () {
          return res.redirect("/clients");
        })
        .catch((error) => res.send(error));
    }else{
        Client.update({
            username: req.body.ClinameSignUpCli,
            name: req.body.nameSignUpCli,
            email: req.body.emailSignUpCli,
            password: req.body.passwordSingUpCli,
            dateborn: req.body.nacimientoCli,
            sex:req.body.radioSexCli,
          },
          {
              where: {username: username}
          })
            .then(function () {
              return res.redirect("/clients");
            })
            .catch((error) => res.send(error));
    }
  },
  destroy: function (req,res) {
    const username = req.params.userName;
    Client.destroy({
        where: {username: username}, force: true})
    .then(()=>{
        return res.redirect('/clients')})
    .catch(error => res.send(error)) 
}
};

module.exports = ClientsC;
