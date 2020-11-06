module.exports = {
    loggedIn:(req,res,next)=>{
        if(req.session.userId){
            next();
        }else{
            console.log('Usuario no logueado | redirect to login');
            res.redirect('/users/login');
        }
    }
}