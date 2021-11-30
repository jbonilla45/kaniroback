const router = require('express').Router();
const operacion = require('../controllers/costos-controller');

router.get('/', 	operacion.getCostos);
router.post('/', 	operacion.crearCosto);
router.get('/:id', 	operacion.getCosto);
router.put("/:id",	operacion.actualizarCosto);
router.delete('/:id', operacion.borrarCosto);

module.exports = router