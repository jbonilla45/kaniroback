const coleccionCompras = require('../schemas/compras-schema');
const operaciones = {};

operaciones.getCompras = async function(req, res) {
	const datos = await coleccionCompras.find()
	res.json(datos);
}

operaciones.getCompra = async function(req, res) {
	const dato = await coleccionCompras.findById(req.params.id);
	res.json(dato);
}

operaciones.crearCompra = async function(req, res) {
	const compra = new coleccionCompras(req.body);
	console.log(compra);
	await compra.save();
	res.json({"status":"Dato de compra guardado"});	
}

operaciones.actualizarCompra = async function(req, res) {
	const { id } = req.params;
	const compra = {
		descripcion: req.body.descripcion,
    	valor: req.body.valor,
    	categoria: req.body.categoria
	}
	console.log(compra)
	await coleccionCompras.findByIdAndUpdate(req.params.id, {$set: compra}, {new: true});
	res.json({"status":"Dato de compra actualizado"});
}

operaciones.borrarCompra = async function(req, res) {
	await coleccionCompras.findByIdAndRemove(req.params.id);
	res.json({"status":"Dato de compra borrado"});	

}

module.exports = operaciones