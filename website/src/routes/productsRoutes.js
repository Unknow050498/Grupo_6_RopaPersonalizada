const express = require("express");
const productsR = express.Router();
const multer = require("multer");
const path = require("path");
const app = require("../app");
const permisionMiddle = require("../middleware/permisionMiddle");
const { body } = require("express-validator");

const productsC = require("../controllers/productsController");
//Validaciones
const validaCreateProduct = [
  body("model").notEmpty().withMessage("Escribe el modelo"),
  body("model")
    .isLength({ min: 5 })
    .withMessage("El modelo debe ser de más de 5 caracteres"),
  body("type_id").notEmpty().withMessage("Selecciona un tipo de prenda"),
  body("price").notEmpty().withMessage("Escribe el precio"),
  body("price").isDecimal().withMessage("El precio debe ser una cantidad"),
  body("description_short")
    .notEmpty()
    .withMessage("Escribe una descripción para el producto"),
  body("description_short")
    .isLength({ min: 5, max: 50 })
    .withMessage("Sólo puedes usar máximo 50 caracteres"),
  body("description")
    .notEmpty()
    .withMessage("Porfavor escribe la descripción completa del producto"),
  body("description")
    .isLength({ min: 5, max: 300 })
    .withMessage("Sólo puedes usar máximo 300 caracteres"),
];

const validaCreateStock = [
  body("model").notEmpty().withMessage("Escribe el modelo"),
  body("model")
    .isLength({ min: 5 })
    .withMessage("El modelo debe ser de más de 5 caracteres"),
  body("color").notEmpty().withMessage("Selecciona un tipo de prenda"),
  body("size").notEmpty().withMessage("Selecciona un tipo de prenda"),
  body("amount")
    .notEmpty()
    .withMessage("Escribe una descripción para el producto"),
  body("amount")
    .isNumeric()
    .withMessage("La cantidad deber ser un número mayor de 0"),
];

// Imagenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/img"));
  },
  filename: function (req, file, cb) {
    const newFilename = `IMG${file.originalname}`;
    cb(null, newFilename);
  },
});
const upload = multer({ storage });
//const uploadMulty = multer({storage,}).any('uploadedImages');

productsR.get("/products", productsC.list);
productsR.get("/products/detailsP/:model", productsC.detailsP);
productsR.get("/products/addStock", permisionMiddle, productsC.addStock);
productsR.post(
  "/products/addStock",
  upload.single("uploadedImageStock"),
  validaCreateStock,
  productsC.createStock
);
productsR.get("/products/addProduct", permisionMiddle, productsC.addProduct);
productsR.post(
  "/products/addProduct",
  upload.single("uploadedImage"),
  validaCreateProduct,
  productsC.createProduct
);
productsR.post("/products/search", productsC.search);

module.exports = productsR;
