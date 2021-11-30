const coleccionVentas = require('../schemas/ventas-schema');
const operaciones = {};

operaciones.getVentas = async function(req, res) {
	try{
		const ventas = await coleccionVentas.find()
		if (ventas != null) {
            res.status(200).json(ventas);
        } else {
            res.status(404).json({ message: "Not found" })
        }
	}catch(err){
		res.status(400).json({ message: "Bad request" })
	}
}

operaciones.getVenta = async function(req, res) {
	const dato = await coleccionVentas.findById(req.params.id);
	res.json(dato);

	try {
        const venta = await coleccionVentas.findById(req.params.id);
        if (venta != null) {
            res.status(200).json(venta);
        } else {
            res.status(404).json({ message: "Not found" })
        }
    } catch (err) {
        res.status(400).json({ message: "Bad request" })
    }
}

operaciones.crearVenta = async function(req, res) {
	try {
        const venta = new coleccionVentas(req.body);
        await venta.save();
        res.status(201).json(venta);
    } catch (err) {
        res.status(400).json({ message: "Bad request" })
    }	
}

operaciones.actualizarVenta = async function(req, res) {
	try {
        const Venta = {
			valor: req.body.valor,
			categoria: req.body.categoria
		}
        await coleccionVentas.findByIdAndUpdate(req.params.id, { $set: Venta }, { new: true });
        res.status(200).json(Venta);
    } catch (err) {
        res.status(400).json({ message: "Bad request" })
    }
}


operaciones.borrarVenta = async function(req, res) {
	try {
        await coleccionVentas.findByIdAndRemove(req.params.id);
        res.status(200).json({ "status": "Dato de venta borrado" });
    } catch (err) {
        res.status(400).json({ message: "Bad request" })
    }	
}

module.exports = operaciones