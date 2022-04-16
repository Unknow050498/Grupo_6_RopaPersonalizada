function permisionMiddle(req, res, next){
    if(res.locals.isAdmin == false){
        return res.redirect('/login');
    }
    next();
}

module.exports = permisionMiddle;