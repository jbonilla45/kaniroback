const coleccionCostos = require('../schemas/costos-schema');
const operaciones = {};

operaciones.getCostos = async function(req, res) {
	const datos = await coleccionCostos.find()
	res.json(datos);
}

operaciones.getCosto = async function(req, res) {
	const dato = await coleccionCostos.findById(req.params.id);
	res.json(dato);
}

operaciones.crearCosto = async function(req, res) {
	const costo = new coleccionCostos(req.body);
	console.log(costo);
	await costo.save();
	res.json({"status":"Dato de costo guardado"});	
}

operaciones.actualizarCosto = async function(req, res) {
	const { id } = req.params;
	const costo = {
		descripcion: req.body.descripcion,
    	valor: req.body.valor,
    	categoria: req.body.categoria
	}
	console.log(costo)
	await coleccionCostos.findByIdAndUpdate(req.params.id, {$set: costo}, {new: true});
	res.json({"status":"Dato de costo actualizado"});
}

operaciones.borrarCosto = async function(req, res) {
	await coleccionCostos.findByIdAndRemove(req.params.id);
	res.json({"status":"Dato de costo borrado"});	

}

module.exports = operaciones