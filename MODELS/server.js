const express = require('express');

const db_connection = require('../DATABASE/config');

class Server {
    
    constructor () {
        
        this.app = express()

        this.port = process.env.port

        this.usuarioPath = '/api/usuario' 
        this.rolesPath = '/api/roles'
        this.vigilantesPath = '/api/vigilantes'

        this.residentesPath = '/api/residentes'
        // this.propietariosPath = '/api/propietarios'
        // this.espaciosPath = '/api/espacios'
        
        this.middlewares()

        this.routes()

        this.db_connect()

    }

    middlewares() //Directorio Publico
    {
        this.app.use(express.static(__dirname + "/PUBLIC"));
        // this.app.use( cors() );
        // this.app.use(bodyParser.json()) // for parsing application/json

    }

    routes()
    {

        this.app.use(this.usuarioPath, require('../ROUTES/usuarios'))
        this.app.use(this.vigilantesPath, require('../ROUTES/vigilantes'))
        this.app.use(this.rolesPath, require ('../ROUTES/roles'))

        this.app.use(this.residentesPath, require ('../ROUTES/residentes'))
        // this.app.use(this.propietariosPath, require ('../ROUTES/propietarios'))
        // this.app.use(this.this.app.use(this.rolesPath, require ('../ROUTES/roles')))
          
    }

    async db_connect() {

        await db_connection()

    }

    listen() {
        this.app.listen(this.port, () => {

            console.log(`Escuchando el puerto ${this.port}`)

        })
    }
}

//Exportar la clase server
module.exports = Server