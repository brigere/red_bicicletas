const express = require('express');
const router = express.Router();
const bicicletaController = require('../../controllers/api/bicicletaControllerApi');
const auth = require('../../middlewares/auth');

router.get('/',auth.validateUser,bicicletaController.bicicleta_list);
router.post('/create',bicicletaController.bicicleta_create);
router.post('/delete',bicicletaController.bicicleta_delete);

module.exports = router;