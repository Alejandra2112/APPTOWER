const {Router} = require('express')

const route = Router()

const {getResidente, postResidente, putResidente, deleteResidente} = require('../CONTROLLERS/residentes')

route.get('/', getResidente)
route.post('/', postResidente)
route.put('/', putResidente)
route.delete('/', deleteResidente)

module.exports = route