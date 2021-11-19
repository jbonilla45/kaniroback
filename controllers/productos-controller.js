const coleccionProductos = require('../schemas/productos-schema');
const operaciones = {};

operaciones.getProductos = async function(req, res) {
	const datos = await coleccionProductos.find()
	res.json(datos);
}

operaciones.getProducto = async function(req, res) {
	const dato = await coleccionProductos.findById(req.params.id);
	res.json(dato);
}

operaciones.crearProducto = async function(req, res) {
	const Producto = new coleccionProductos(req.body);
	console.log(Producto);
	await Producto.save();
	res.json({"status":"Dato de Producto guardado"});	
}

operaciones.actualizarProducto = async function(req, res) {
	const { id } = req.params;
	const Producto = {
		codigoProducto: req.body.codigoProducto,
    	costoUnitario: req.body.costoUnitario,
    	descripcion: req.body.descripcion
	}
	console.log(Producto)
	await coleccionProductos.findByIdAndUpdate(req.params.id, {$set: Producto}, {new: true});
	res.json({"status":"Dato de Producto actualizado"});
}

operaciones.borrarProducto = async function(req, res) {
	await coleccionProductos.findByIdAndRemove(req.params.id);
	res.json({"status":"Dato de Producto borrado"});	

}

module.exports = operaciones