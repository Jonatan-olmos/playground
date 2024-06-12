var express = require('express');
var router = express.Router();
const {index, inicio, } = require('../controllers/indexController')

/* / */
router
.get('/',index)
.get('/inicio',inicio)


module.exports = router;
