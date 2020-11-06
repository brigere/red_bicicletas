const express = require('express')
const router = express.Router()
const bicicletaController = require('../controllers/bicicletas')
const auth = require('../middlewares/auth');

router.get('/',auth.loggedIn,bicicletaController.index)

module.exports = router