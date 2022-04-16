const fs = require("fs");
const path = require('path');
const { fileURLToPath } = require("url");
const db = require("../database/models");
//const Imagen = require("../database/models/Imagen");
const sequelize = db.sequelize;
const bcryptjs = require('bcryptjs');



const Product = db.Product;
const Stock = db.Stock;
const Clients = db.Client;
const Employs = db.User;

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
    logout: (req,res) => {
      res.clearCookie('adminRegister');
      res.clearCookie('clientRegister');
      req.session.destroy();
      return res.redirect('/');
    },
    loginProcess: (req, res)=>{
      const user = req.body.usernameLogin;
      if(req.body.soyEmpleado){
        Employs.findByPk(user)
      .then((employ)=>{
        if(employ){
          let okPassE = bcryptjs.compareSync(req.body.passwordLogin,employ.password_e);
          if(okPassE){
            delete employ.password_e;
            req.session.userLogged = employ;
            res.cookie('adminRegister', req.body.usernameLogin, {maxAge: (1000 *60)*10})
            return res.redirect("/")
          }else{
            return res.render('login',{
              errors: {
                passUser: {
                  msg:'Contraseña incorrecta'
                }
              }
            })
          }
        
        }else{
          return res.render('login',{
            errors: {
              userName: {
                msg:'Usuario incorrecto'
              }
            }
          })
        }
      })
      }else{
      Clients.findByPk(user)
      .then((cliente)=>{
        if(cliente){
          let okPass = bcryptjs.compareSync(req.body.passwordLogin,cliente.password);
          if(okPass){
            delete cliente.password;
            req.session.userLogged = cliente;
            res.cookie('clientRegister', req.body.usernameLogin, {maxAge: (1000 *60)*10})
            return res.redirect("/")
          }else{
            return res.render('login',{
              errors: {
                passUser: {
                  msg:'Contraseña incorrecta'
                }
              }
            })
          }
        
        }else{
          return res.render('login',{
            errors: {
              userName: {
                msg:'Usuario incorrecto'
              }
            }
          })
        }
      })
    }

    },
    register: (req, res) => {
        res.render('signup');
    },
};

module.exports = mainC;