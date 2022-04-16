const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");
const db = require("../database/models");
const sequelize = db.sequelize;
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const User = db.User;

const usersC = {
  
};

module.exports = usersC;
