const coleccionCompras = require('../schemas/compras-schema');
const operaciones = {};

operaciones.getCompras = async function(req, res) {
    try {
        const compras = await coleccionCompras.find(req.query)
        if (compras != null) {
            res.status(200).json(compras);
        } else {
            res.status(404).json({ message: "Not found" })
        }
    } catch (err) {
        res.status(400).json({ message: "Bad request" })
    }
}

operaciones.getCompra = async function(req, res) {
    try {
        const compra = await coleccionCompras.findById(req.params.id);
        if (compra != null) {
            res.status(200).json(compra);
        } else {
            res.status(404).json({ message: "Not found" })
        }
    } catch (err) {
        res.status(400).json({ message: "Bad request" })
    }
}

operaciones.crearCompra = async function(req, res) {
    try {
        const compra = new coleccionCompras(req.body);
        await compra.save();
        res.status(201).json(compra);
    } catch (err) {
        res.status(400).json({ "status": "Dato de compra guardado" })
    }
}

operaciones.actualizarCompra = async function(req, res) {
	const { id } = req.params;
	const compra = {
		descripcion: req.body.descripcion,
    	valor: req.body.valor,
    	categoria: req.body.categoria,
		cantidad: req.body.cantidad
	}
	console.log(compra)
	await coleccionCompras.findByIdAndUpdate(req.params.id, {$set: compra}, {new: true});
	res.json({"status":"Dato de compra actualizado"});
}

operaciones.borrarCompra = async function(req, res) {
    try {
        await coleccionCompras.findByIdAndRemove(req.params.id);
        res.status(200).json({ "status": "Dato de compra borrado" });
    } catch (err) {
        res.status(400).json({ message: "Bad request" })
    }

}

module.exports = operaciones