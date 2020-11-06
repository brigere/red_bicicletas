const jwt = require('jsonwebtoken');

module.exports = {
    loggedIn:(req,res,next)=>{
        if(req.session.userId){
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
    }
}