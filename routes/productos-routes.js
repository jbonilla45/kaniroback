const router = require('express').Router();
const operacion = require('../controllers/productos-controller');

router.get('/', 	operacion.getProductos);
router.post('/', 	operacion.crearProducto);
router.get('/:id', 	operacion.getProducto);
router.put("/:id",	operacion.actualizarProducto);
router.delete('/:id', operacion.borrarProducto);

module.exports = router