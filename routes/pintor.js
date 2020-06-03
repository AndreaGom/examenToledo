const express = require('express');
let pintor = require('../controllers/pintoresController.js');
//defino a un Router
let router = express.Router();

router.get('/', pintor.list);

module.exports = router;