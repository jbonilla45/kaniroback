const mongoose = require('mongoose');
const { Schema } = mongoose;

const VentasSchema = new Schema({

    fechaRegistro:{
        type:Date,
        default:Date.now()
    },
    valor:{
        type:Number,
        required:true
    },
    categoria:{
        type:String,
        required:true
    }
    
})

module.exports= mongoose.model('Ventas', VentasSchema);