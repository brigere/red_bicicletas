const express = require('express');
const { render } = require('pug');
const router = express.Router();
const index = require('../controllers/indexController')

/* GET home page. */
router.get('/', index.home);
router.get('/login', index.login);
router.get('/register', index.register)


module.exports = router;
