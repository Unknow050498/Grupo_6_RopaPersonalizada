function permisionMiddle(req, res, next){
    if(res.locals.userLogged.type_employ == null){
        return res.redirect('/login');
    }
    
    next();
}

module.exports = permisionMiddle;