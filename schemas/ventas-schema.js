const mongoose = require('mongoose');
const { Schema } = mongoose;

const VentasSchema = new Schema({

    fechaRegistro: {
        type: Date,
        default: Date.now()
    },
    vendedor: {
        type: String,
        required: true
    },
    productos: {
        type: [
            {
                _id: String,
                nombre: String,
                categoria: String,
                cantidad: Number,
                descripcion: String,
                precioUnitario: Number,
                PrecioTotal: Number

            }
        ],
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Ventas', VentasSchema);