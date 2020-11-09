const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

/* GET users listing. */
router.get('/login',userController.login)

router.post('/login',auth.login,userController.authUser)

router.get('/logout',userController.logout)

router.get('/register',userController.register)

router.post('/register',userController.create)

router.get('/register/:code',userController.checkToken)

module.exports = router;
