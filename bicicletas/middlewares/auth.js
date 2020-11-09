const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = {
    loggedIn:(req,res,next)=>{
        if(req.session.userId){
            console.log(`userId: ${req.session.userId}`)
            next();
        }else{
            console.log('Usuario no logueado | redirect to login');
            res.redirect('/users/login');
        }
    },
    validateUser:(req,res,next)=>{
        jwt.verify(
            req.headers['x-acces-token'], 
            req.app.get('secretKey'),
             function(err,decoded){
                if(err){
                    res.json({status:'error',message:err.message,data:null});                  
                }else{
                    req.body.userId = decoded.id;
                    console.log(`JWT verify | ${decoded}`);
                    next();
                } 
        } )        
    },
    login:(req,res,next)=>{
        console.log(req.body.username+' '+req.body.password)
        passport.authenticate('local',function(err,user,info){
            if(err) return next(err);
            if(!user) return res.render('users/login');
            req.session.userId = user.id;
            req.session.userName = user.nombre;
            req.logIn(user,function(e){
                if(e) return next(e)
                return res.redirect('/')
            })
        })(req,res,next);
    }
}