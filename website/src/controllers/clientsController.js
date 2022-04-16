const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");
const db = require("../database/models");
const sequelize = db.sequelize;
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");


//const ClientsFilePath = path.join(__dirname, '../data/ClientsDataBase.json');
//let ClientsJSON = JSON.parse(fs.readFileSync(ClientsFilePath, 'utf-8'));

const Client = db.Client;

const ClientsC = {
  
};

module.exports = ClientsC;
