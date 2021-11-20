const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductosSchema = new Schema({

    codigoProducto: {
        type: String,
        required: true
    },
    costoUnitario: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Productos', ProductosSchema);