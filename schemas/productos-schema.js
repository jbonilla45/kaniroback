const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductosSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precioUnitario: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Productos', ProductosSchema);