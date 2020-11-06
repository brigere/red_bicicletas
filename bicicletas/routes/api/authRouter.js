const express = require('express');
const router = express.Router();
const authController = require('../../controllers/api/authControllerApi');

router.post('/',authController.authenticate);

module.exports = router;