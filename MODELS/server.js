const express = require('express');

const db_connection = require('../DATABASE/config');

class Server {
    
    constructor () {
        
        this.app = express()

        this.port = process.env.port

        //this.moduloPath = '/api/usuario' //Ruta pública de la API

        this.middlewares()//Seguridad

        this.routes()

        this.db_connect()

    }

    middlewares() //Directorio Publico
    {
        this.app.use(express.static(__dirname + "/PUBLIC"));
        //this.app.use( cors() );
        //this.app.use(bodyParser.json()) // for parsing application/json

    }

    routes()
    {
        //this.app.use(this.usuarioPath, require('../routes/usuarios'))
    }

    async db_connect(){
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