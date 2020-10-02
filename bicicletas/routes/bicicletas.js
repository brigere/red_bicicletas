const express = require('express')
const router = express.Router()
const bicicletaController = require('../controllers/bicicletas')

router.get('/',bicicletaController.index)

module.exports = router