function userLoggedMiddle(req, res, next){
    res.locals.isLogged = false;
    res.locals.isAdmin = false;
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
        if(res.locals.userLogged.type_employ != null){
            res.locals.isAdmin = true;
        }
    }
    next();
}

module.exports = userLoggedMiddle;