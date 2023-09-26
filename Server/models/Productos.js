const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    Nombre: {
        type:String,
        require:true
    },
    Descripcion: {
        type:String,
        require:true
    },
    Urlimagen: {
        type:String,
        require:true
    },
    Marca: {
        type:String,
        require:true
    },
    EnCart: {
        type:Boolean,
        default: false
    },
    Precio: {
        type:Number,
        require:true
    },
    FechaCreacion: {
        type:Date,
        default : Date.now()
    },
    Carrito: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario' // Reemplaza 'Usuario' con el nombre de tu modelo de usuario
        },
        Cantidad: {
            type: Number,
            default: 1
        }
    }]
    
})

module.exports = mongoose.model('Producto',productoSchema)