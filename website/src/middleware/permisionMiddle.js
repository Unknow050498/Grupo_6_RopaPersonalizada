function permisionMiddle(req, res, next){
    console.log(res.locals.isAdmin);
    if(res.locals.isAdmin == false){
        return res.redirect('/login');
    }
    next();
}

module.exports = permisionMiddle;