const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');

/* GET users listing. */
router.get('/login',userController.login)

router.post('/login',
    function(req,res,next){
        console.log(req.body.username+' '+req.body.password)
        passport.authenticate('local',function(err,user,info){
            if(err) return next(err);
            if(!user) return res.render('users/login');
            req.session.userId = user.id
            req.logIn(user,function(e){
                if(e) return next(e)
                return res.redirect('/')
            })
        })(req,res,next);
    },
    userController.authUser)

router.get('/logout',userController.logout)

router.get('/register',userController.register)

router.post('/register',userController.create)

router.get('/register/:code',userController.checkToken)

module.exports = router;
