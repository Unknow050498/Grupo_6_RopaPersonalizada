const fs = require("fs");
const path = require('path');
const { fileURLToPath } = require("url");
const db = require("../database/models");
//const Imagen = require("../database/models/Imagen");
const sequelize = db.sequelize;


const Product = db.Product;
const Stock = db.Stock;

const mainC = {
    home: (req, res) => {
        const obtenerProducts = Product.findAll({
          include: [{ association: "stock" }, { association: "type_products" }],
        });
        const obtenerStock = Stock.findAll({
          include: [
            { association: "sizes" },
            { association: "images" },
            { association: "products" },
          ],
          limit:6
        });
        Promise.all([obtenerProducts, obtenerStock])
          .then(function ([productos, inventario]) {
            res.render("index", { productos, inventario });
          })
          .catch((error) => {
            res.send(error);
          });
      },
    login: (req,res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('signup');
    }
};

module.exports = mainC;