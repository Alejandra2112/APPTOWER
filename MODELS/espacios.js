const {Scheme, model} = require('mongoose')

const schema_espacio = Schema ({



    nombre_espacio: {

        type: String,
        required: [true, 'El nombre dele spacio es obligatorio']

    },

    tipo_espacio: {

        type: String,
        enum: ['APARTAMENTO', 'SALON SOCIAL', 'PARQUEADERO', 'ZONA HUMEDA'],
        required: [true, 'El tipo de espacio es obligatorio']

    },

    area: {

        type: Number,
        min: [0, 'El area debe ser superior a cero']        

    },

    capacidad: {

        type: Number,
        min: [0, 'La capacidad debe ser superior a cero']        
        
    },

    estado: {

        type: String,
        enum: ['ACTIVO', 'INACTIVO'],
        required: [true, 'El estado del espacio es obligatorio']
        
    }
})

module.exports = model('Espacio', schema_espacio)  

