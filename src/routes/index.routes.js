var express = require('express');
var router = express.Router();
const {index, inicio, principalCursos, consola, contenido, } = require('../controllers/indexController')

/* / */
router
.get('/',index)
.get('/inicio',inicio)
.get('/inicio',inicio)
.get('/principalCursos',principalCursos)
.get('/contennido',contenido)

.get('/consola',consola)




module.exports = router;
