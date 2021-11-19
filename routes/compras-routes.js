const router = require('express').Router();
const operacion = require('../controllers/compras-controller');

router.get('/', 	operacion.getCompras);
router.post('/', 	operacion.crearCompra);
router.get('/:id', 	operacion.getCompra);
router.put("/:id",	operacion.actualizarCompra);
router.delete('/:id', operacion.borrarCompra);

module.exports = router