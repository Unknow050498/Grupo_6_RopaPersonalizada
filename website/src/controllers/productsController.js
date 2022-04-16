const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");
const db = require("../database/models");
const { validationResult } = require("express-validator");

const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

const Product = db.Product;
const Stock = db.Stock;
const Color = db.Color;
const Size = db.Size;
const Imagen = db.Imagen;
const Type_product = db.Type_product;



const productsC = {
  list: (req, res) => {
    const obtenerProducts = Product.findAll({
      include: [{ association: "stock" }, { association: "type_products" }],
    });
    const obtenerStock = Stock.findAll({
      include: [
        { association: "sizes" },
        { association: "images" },
        { association: "products" },
      ],
    });
    Promise.all([o
      
      });
  },
  createStock: function (req, res) {
    const client = req.body.ClinameSignUpCli;
    if (!req.file) {
      
            errors: errors.array(),
            old: req.body,
          });
        })
        .catch((error) => {
          res.send(error);
        });
    }
    Stock.create({
      products_model: req.body.model,
      amount_Products: req.body.amount,
      color_id: req.body.color,
      sizes_id: req.body.size,
      imgSecu_stock: req.file.filename,
    })
      .then(function () {
        return res.redirect("/products");
      })
      .catch((error) => res.send(error));
  },
  detailsP: (req, res) => {
    const model = req.params.model;
    const obtenerProducts = Product.findByPk(model, {
      include: [{ association: "stock" }, { association: "type_products" }],
    });
    const obtenerStock = Stock.findAll({
      include: [
        { association: "sizes" },
        { association: "images" },
        { association: "products" },
        { association: "colors" },
      ],
      where: { products_model: model },
    });
    const obtenerMiniaturas = Imagen.findAll({
      include: [{ association: "stock" }],
    });
    Promise.all([obtenerProducts, obtenerStock, obtenerMiniaturas])
      .then(function ([producto, stock, miniaturas]) {
        res.render("detail-product", { producto, stock, miniaturas });
      })
      .catch((error) => res.send(error));
  },
  addProduct: (req, res) => {
    getProductosTypes()
      .then(function ({ productos, tipos }) {
        res.render("addProduct", { productos, tipos });
      })
      .catch((error) => {
        res.send(error);
      });
  },
  createProduct: function (req, res) {
    
    }
    Product.create({
      model_Products: req.body.model,
      type_id: req.body.type_id,
      price: req.body.price,
      description_products: req.body.description,
      short_description: req.body.description_short,
      img_principal: req.file.filename,
    })
      .then(() => {
        return res.redirect("/products/addStock");
      })
      .catch((error) => res.send(error));
  },
  
};

module.exports = productsC;
