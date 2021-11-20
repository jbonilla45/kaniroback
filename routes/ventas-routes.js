const router = require('express').Router();
const operacion = require('../controllers/ventas-controller');

router.get('/', 	operacion.getVentas);
router.post('/', 	operacion.crearVenta);
router.get('/:id', 	operacion.getVenta);
router.put("/:id",	operacion.actualizarVenta);
router.delete('/:id', operacion.borrarVenta);

module.exports = router