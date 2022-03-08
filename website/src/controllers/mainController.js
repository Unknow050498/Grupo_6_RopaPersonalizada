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
      console.log(req.session.userLogged )
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
      req.session.destroy();
      return res.redirect('/');
    },
    loginProcess: (req, res)=>{
      const user = req.body.usernameLogin;
      if(req.body.soyEmpleado){
        Employs.findByPk(user)
      .then((employ)=>{
        if(employ){
          console.log(employ);
          let okPassE = bcryptjs.compareSync(req.body.passwordLogin,employ.password_e);
          if(okPassE){
            console.log("todo ok")
            delete employ.password_e;
            req.session.userLogged = employ;
            return res.redirect("/")
          }else{
            console.log("Contraseña erronea")
            return res.render('login',{
              errors: {
                passUser: {
                  msg:'Contraseña incorrecta'
                }
              }
            })
          }
        
        }else{
          console.log("no hay usuario");
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
          console.log(cliente);
          let okPass = bcryptjs.compareSync(req.body.passwordLogin,cliente.password);
          if(okPass){
            console.log("todo ok")
            delete cliente.password;
            req.session.userLogged = cliente;
            return res.redirect("/")
          }else{
            console.log("Contraseña erronea")
            return res.render('login',{
              errors: {
                passUser: {
                  msg:'Contraseña incorrecta'
                }
              }
            })
          }
        
        }else{
          console.log("no hay cliente");
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