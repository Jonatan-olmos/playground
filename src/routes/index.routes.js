var express = require('express');
var router = express.Router();
const {index, inicio, principalCursos, } = require('../controllers/indexController')

/* / */
router
.get('/',index)
.get('/inicio',inicio)
.get('/inicio',inicio)
.get('/principalCursos',principalCursos)



module.exports = router;
