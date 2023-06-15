const {response} = require('express') 
const Residente = require('../MODELS/residentes')
const { json } = require('body-parser')

const getResidente = async(req, res = response) => {

    let mensaje = ''
    try {

        const residentes = await Residente.find()
        mensaje = residentes
        
    } catch (error) {

        mensaje = error
        
    }

    res.json({

        respuesta: mensaje

    })

}

const postResidente =  async (req, res = response) => {

    const body = req.body
    let mensaje = ''
    
    const residente =  new Residente(body)

    try{

        await residente.save({})
        mensaje = 'Residente registrado exitosamente'

    } catch(error){

        mensaje = error

    }
    res.json({

        mensaje

    })

}

const putResidente =  async (req, res = response) => {

    let mensaje = ''
    const body = req.body

    try{

        if (body.tipodemodificacion == 'unitario'){
            await Residente.findOneAndUpdate({numero_documento_residente: body.numero_documento_residente})
            mensaje = 'Residente actualizado exitosamente. Modificacion simple'
        }else{
            await Residente.updateMany({numero_documento_residente: body.numero_documento_residente})
            mensaje = 'Residente actualizado exitosamente. Modificación: Multiple'
        }

    }catch(error){

        mensaje = error

    }
    req.json({

        mensaje: mensaje

    })

}

const deleteResidente = async (req, res) => {

    let mensaje = ''
    const body = req.query

    try{

        await Residente.findOneAndDelete({numero_documento_residente: body.numero_documento_residente})
        mensaje = 'Residente eliminado exitosamente'

    }catch(error){

        mensaje = error

    }
    res.json({

        mensaje: mensaje

    })
}

module.exports = {

    getResidente,
    postResidente,
    putResidente,
    deleteResidente

}