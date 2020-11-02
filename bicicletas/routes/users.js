const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController') 

/* GET users listing. */
router.get('/login',userController.login)
router.post('/login',userController.authUser)
router.get('/register',userController.register)
router.post('/register',userController.create)

module.exports = router;
