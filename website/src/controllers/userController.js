const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");
const db = require("../database/models");
const sequelize = db.sequelize;
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

//const usersFilePath = path.join(__dirname, '../data/UsersDataBase.json');
//let usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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
    const user = req.body.usernameLogin;
    const emailUser = req.body.emailSignUp;
    if (errors.isEmpty()) {
      const BuscaUserEmploy = User.findByPk(user);
      const BuscaEmailEmploy = User.findAll({
        where: {
          email_e: emailUser
        }
      });
      Promise.all([BuscaUserEmploy, BuscaEmailEmploy])
        .then((function ([user1, emailUser1]) {
          console.log(`usaurio: ${user}`);
          console.log(`email: ${emailUser}`);
          if (user1 != user) {
            if (emailUser1 != emailUser ) {
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
            } else {
              console.log("Email registrado previamente");
              return res.render('signupAdmin', {
                errorsUser: {
                  mailUser: {
                    msg: 'Email registrado previamente'
                  }
                }
              })
            }
          } else {
            console.log("Nombre de usuario registrado previamente");
            return res.render('signupAdmin', {
              errorsUser: {
                nickUser: {
                  msg: 'Nombre de usuario registrado previamente'
                }
              }
            })
          }
        }))
    } else {
      res.render("signupAdmin.ejs", { errors: errors.array(), old: req.body });
      console.log(errors.array());
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
