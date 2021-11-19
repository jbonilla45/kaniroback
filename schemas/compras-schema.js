const mongoose = require('mongoose');
const { Schema } = mongoose;

const ComprasSchema = new Schema({

    fechaRegistro:{
        type:Date,
        default:Date.now()
    },
    descripcion:{
        type:String,
        required:true
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

module.exports= mongoose.model('Compras', ComprasSchema);