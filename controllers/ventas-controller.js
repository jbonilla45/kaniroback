const coleccionVentas = require('../schemas/ventas-schema');
const operaciones = {};

operaciones.getVentas = async function(req, res) {
	const datos = await coleccionVentas.find()
	res.json(datos);
}

operaciones.getVenta = async function(req, res) {
	const dato = await coleccionVentas.findById(req.params.id);
	res.json(dato);
}

operaciones.crearVenta = async function(req, res) {
	const Venta = new coleccionVentas(req.body);
	console.log(Venta);
	await Venta.save();
	res.json({"status":"Dato de Venta guardado"});	
}

operaciones.actualizarVenta = async function(req, res) {
	const { id } = req.params;
	const Venta = {
		valor: req.body.valor,
    	categoria: req.body.categoria
	}
	console.log(Venta)
	await coleccionVentas.findByIdAndUpdate(req.params.id, {$set: Venta}, {new: true});
	res.json({"status":"Dato de Venta actualizado"});
}

operaciones.borrarVenta = async function(req, res) {
	await coleccionVentas.findByIdAndRemove(req.params.id);
	res.json({"status":"Dato de Venta borrado"});	

}

module.exports = operaciones