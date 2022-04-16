const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");
const db = require("../database/models");
const sequelize = db.sequelize;
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const User = db.User;

const usersC = {
  list: (req, res) => {
    User.findAll()
      .then(function (usuarios) {
        res.render("users.ejs", { usuarios });
      })
      .catch((error) => {
        res.send(error);
      });
  },
  addUser: (req, res) => {
    res.render("signupAdmin.ejs");
  },
  createUser: function (req, res) {

    let errors = validationResult(req);
    const user = req.body.usernameSignUp;
    const emailUser = req.body.emailSignUp;
    if (errors.isEmpty()) {
      const BuscaUserEmploy = User.findByPk(user);
      const BuscaEmailEmploy = User.findAll({
        where: {
          email_e: emailUser,
        }
      });
      Promise.all([BuscaUserEmploy, BuscaEmailEmploy])
        .then((function ([user, emailUser]) {
          if (user) {
            return res.render('signupAdmin', {
              errorsUser: {
                nickUser: {
                  msg: 'Nombre de usuario registrado previamente'
                }
              }
            })
          } else {
            if (emailUser !="") {
              return res.render('signupAdmin', {
                errorsUser: {
                  mailUser: {
                    msg: 'Email registrado previamente'
                  }
                }
              })
            } else {
              let passhash = bcryptjs.hashSync(req.body.passwordSingUp, 10);
              if (req.file) {
                User.create({
                  user_employ: req.body.usernameSignUp,
                  name_e: req.body.nameSignUp,
                  email_e: req.body.emailSignUp,
                  password_e: passhash,
                  dateborn_e: req.body.nacimiento,
                  sex_e: req.body.radioSex,
                  type_employ: req.body.typeSignUp,
                  imgProfile: req.file.filename,
                })
                  .then(function () {
                    return res.redirect("/users");
                  })
                  .catch((e) => res.send(e));
              } else {
                User.create({
                  user_employ: req.body.usernameSignUp,
                  name_e: req.body.nameSignUp,
                  email_e: req.body.emailSignUp,
                  password_e: passhash,
                  dateborn_e: req.body.nacimiento,
                  sex_e: req.body.radioSex,
                  type_employ: req.body.typeSignUp,
                  imgProfile: "avatar.png",
                })
                  .then(function () {
                    return res.redirect("/users");
                  })
                  .catch((e) => res.send(e));
              }
            }
          }
        }))
    } else {
      res.render("signupAdmin.ejs", { errors: errors.array(), old: req.body });
      //res.send(errors);
    }
  },
  detailsU: (req, res) => {
    const userName = req.params.userName;
    User.findByPk(userName)
      .then(function (usuario) {
        res.render("userDetail", { usuario });
      })
      .catch((error) => res.send(error));
  },
  editU: (req, res) => {
    const userName = req.params.userName;
    User.findByPk(userName)
      .then(function (usuario) {
        res.render("userEdit", { usuario });
      })
      .catch((error) => res.send(error));
  },
  updateU: function (req, res) {
    const userName = req.params.userName;
    User.update(
      {
        user_employ: req.body.usernameSignUp,
        name_e: req.body.nameSignUp,
        email_e: req.body.emailSignUp,
        password_e: req.body.passwordSingUp,
        dateborn_e: req.body.nacimiento,
        sex_e: req.body.radioSex,
        type_employ: req.body.typeSignUp,
        imgProfile: req.file.filename,
      },
      {
        where: { user_employ: userName },
      }
    )
      .then(function () {
        return res.redirect("/users");
      })
      .catch((error) => res.send(error));
  },
  destroy: function (req, res) {
    const userName = req.params.userName;
    User.destroy({
      where: { user_employ: userName },
      force: true,
    })
      .then(() => {
        return res.redirect("/users");
      })
      .catch((error) => res.send(error));
  },
};

module.exports = usersC;
