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

function getProductosTypes() {
  const obtenerProducts = Product.findAll({
    include: [{ association: "stock" }, { association: "type_products" }],
  });
  const obtenerTipos = Type_product.findAll({
    include: [{ association: "products" }],
  });
  return Promise.all([obtenerProducts, obtenerTipos]).then(
    ([productos, tipos]) => ({ productos, tipos })
  );
}
function getStock() {
  const obtenerProducts = Product.findAll({
    include: [{ association: "stock" }, { association: "type_products" }],
  });
  const obtenerColores = Color.findAll({
    include: [{ association: "stock" }],
  });
  const obtenerTalla = Size.findAll({
    include: [{ association: "stock" }],
  });

  return Promise.all([obtenerProducts, obtenerColores, obtenerTalla]).then(
    ([productos, colores, tallas]) => ({ productos, colores, tallas })
  );
}

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
    Promise.all([obtenerProducts, obtenerStock])
      .then(function ([productos, inventario]) {
        res.render("products.ejs", { productos, inventario });
      })
      .catch((error) => {
        res.send(error);
      });
  },
  addStock: (req, res) => {
    getStock()
      .then(function ({ productos, colores, tallas }) {
        res.render("stockAdd.ejs", { productos, colores, tallas });
      })
      .catch((error) => {
        res.send(error);
      });
  },
  createStock: function (req, res) {
    const client = req.body.ClinameSignUpCli;
    if (!req.file) {
      Stock.create({
        products_model: req.body.model,
        amount_Products: req.body.amount,
        color_id: req.body.color,
        sizes_id: req.body.size,
        imgSecu_stock: null,
      })
        .then(function () {
          return res.redirect("/products");
        })
        .catch((error) => res.send(error));
    }
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return getStock()
        .then(function ({ productos, colores, tallas }) {
          res.render("stockAdd", {
            productos,
            colores,
            tallas,
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
    if (!req.file) {
      return getProductosTypes().then(function ({ productos, tipos }) {
        res.render("addProduct", {
          productos,
          tipos,
          errorsProduct: {
            photoProduct: {
              msg: "Incluye la imagen del producto",
            },
          },
        });
      });
    }
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return getProductosTypes()
        .then(function ({ productos, tipos }) {
          res.render("addProduct", {
            productos,
            tipos,
            errors: errors.array(),
            old: req.body,
          });
        })
        .catch((error) => {
          res.send(error);
        });
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
  search: (req, res) => {
    const busqueda = req.body.searchClothes;
    console.log(`Variable busqueda: ${busqueda}`);
    const obtenerProducts = Product.findAll({
      include: [{ association: "stock" }, { association: "type_products" }],
      where: {
        [Op.or]: [
          {
            short_description: {
              [Op.like]: `%${busqueda}%`,
            },
          },
          {
            description_products: {
              [Op.like]: `%${busqueda}%`,
            },
          },
        ],
      },
    });
    const obtenerStock = Stock.findAll({
      include: [
        { association: "sizes" },
        { association: "images" },
        { association: "products" },
      ],
    });
    Promise.all([obtenerProducts, obtenerStock])
      .then(function ([productos, inventario]) {
        res.render("search.ejs", { productos, inventario });
      })
      .catch((error) => {
        res.send(error);
      });
  },
};

module.exports = productsC;
