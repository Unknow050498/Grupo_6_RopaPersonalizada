const db = require("../database/models");

function userLoggedMiddle(req, res, next) {
  res.locals.isLogged = false;
  res.locals.isAdmin = false;

  let clientInCookie = req.cookies.clientRegister;
  let adminInCookie = req.cookies.adminRegister;

  if (clientInCookie) {
    db.Client.findByPk(clientInCookie).then((cliente) => {
      console.log(cliente);
      if (cliente) {
        req.session.userLogged = cliente;
      }
    });
  }

  if (adminInCookie) {
    db.User.findByPk(clientInCookie).then((admin) => {
      console.log(admin);
      if (admin) {
        req.session.userLogged = admin;
      }
    });
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
    if (res.locals.userLogged.type_employ != null) {
      res.locals.isAdmin = true;
    }
  }
  next();
}

module.exports = userLoggedMiddle;
