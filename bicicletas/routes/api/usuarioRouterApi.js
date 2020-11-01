const express = require('express');
const router = express.Router();
const usuarioController = require('../../controllers/api/usuarioControllerApi');

router.get('/',usuarioController.usuariosList);
router.post('/',usuarioController.usuariosCreate)
router.post('/reservas',usuarioController.usuariosReservar)

module.exports = router;