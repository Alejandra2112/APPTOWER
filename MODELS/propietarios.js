const {Scheme, model} = require('mongoose')

const schema_propietario = Schema ({

    tipo_documento_propietario: {

        type: String,
        enum: ['CC', 'CE'],
        required: [true, 'El tipo de documento del propietario es obligatorio']

    },

    numero_documento_propietario: {

        type: String,
        required: [true, 'El numero de documento del propietario es obligatorio']

    },

    nombre_propietario: {

        type: String,
        required: [true, 'El nombre del propietario es obligatorio']

    },

    apellido_propietario: {

        type: String,
        required: [true, 'El apellido del propietario es obligatorio']
        
    },

    telefono_propietario: {

        type: String,
        required: [true, 'El numemero de telefono del propietario es obligatorio']
        
    },

    edad_propietario: {

        type: Number,
        required: [true, 'La edad del propietario es obligatorio'],
        min: [18, 'El propietario debe ser mayor de edad']
        
    },

    fecha_inicio: {

        type: Date,
        required: [true, 'La fecha de inicio es obligatorio']
        
    },

    fecha_fin: {

        type: Date,

    },

    estado: {

        type: String,
        enum: ['ACTIVO', 'INACTIVO'],
        required: [true, 'El estado del propietario es obligatorio']
        
    }
})

module.exports = model('Propietario', schema_propietario) 

