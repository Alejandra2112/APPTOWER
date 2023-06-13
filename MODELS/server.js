const express = require('express');

const db_connection = require('../DATABASE/config');

class Server {
    
    constructor () {
        
        this.app = express()

        this.port = process.env.port

        this.usuarioPath = '/api/usuario' 
        this.rolesPath = '/api/roles'
        this.vigilantesPath = '/api/vigilantes'
        
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

        this.app.use(this.usuarioPath, require('../ROUTES/usuarios'))
        this.app.use(this.vigilantesPath, require('../ROUTES/vigilantes'))
        this.app.use(this.rolesPath, require ('../ROUTES/roles'))

        // this.app.get('/usuarios', async (req, res) => {
        //     const url = 'http://localhost:8094/api/usuario';
        
        //     try {
        //       const response = await fetch(url);
        //       const data = await response.json();
        //       const usuarios = data.usuarios;
        
        //       let mensaje = '';
        //       usuarios.forEach(usuario => {
        //         mensaje += `<tr><td>${usuario.tipoDoc}</td>` +
        //                    `<td>${usuario.documento}</td>` +
        //                    `<td>${usuario.nombre}</td>` +
        //                    `<td>${usuario.apellido}</td>` +
        //                    `<td>${usuario.correo}</td>` +
        //                    `<td>${usuario.telefono}</td>` +
        //                    `<td>${usuario.rol}</td>` +
        //                    `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(usuario)})'>Editar</a>
        //                     <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${usuario._id}")'>Eliminar</a>
        //                    </td></tr>`;
        //       });
        
        //       res.send(`<table>${mensaje}</table>`);
        //     } catch (error) {
        //       res.status(500).send('Error en la solicitud');
        //     }
        //   });
          
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