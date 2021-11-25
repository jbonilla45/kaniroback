const coleccionCostos = require('../schemas/costos-schema');
const operaciones = {};

operaciones.getCostos = async function(req, res) {
	try{
		const costos = await coleccionCostos.find()
		if (costos != null) {
            res.status(200).json(costos);
        } else {
            res.status(404).json({ message: "Not found" })
        }
	}catch(err){
		res.status(400).json({ message: "Bad request" })
	}
}

operaciones.getCosto = async function(req, res) {
	try {
        const costo = await coleccionCostos.findById(req.params.id);
        if (costo != null) {
            res.status(200).json(costo);
        } else {
            res.status(404).json({ message: "Not found" })
        }
    } catch (err) {
        res.status(400).json({ message: "Bad request" })
    }
}

operaciones.crearCosto = async function(req, res) {
	try {
        const costo = new coleccionCostos(req.body);
        await costo.save();
        res.status(201).json(costo);
    } catch (err) {
        res.status(400).json({ message: "Bad request" })
    }	
}

operaciones.actualizarCosto = async function(req, res) {
	try {
        const costo = {
			descripcion: req.body.descripcion,
			valor: req.body.valor,
			categoria: req.body.categoria
		}
        await coleccionCostos.findByIdAndUpdate(req.params.id, { $set: costo }, { new: true });
        res.status(200).json(costo);
    } catch (err) {
        res.status(400).json({ message: "Bad request" })
    }
}

operaciones.borrarCosto = async function(req, res) {
	try {
        await coleccionCostos.findByIdAndRemove(req.params.id);
        res.status(200).json({ "status": "Dato de costo borrado" });
    } catch (err) {
        res.status(400).json({ message: "Bad request" })
    }	

}

module.exports = operaciones