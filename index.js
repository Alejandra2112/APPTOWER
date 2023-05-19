const express = require('express')//Importa el modulo para crear aplicaciones web
const app = express() // Se crea una instancia de express
const port = 8087 //Puerto
const path = require('path') //Importa el mudulo path que permite trabajar con rutas y directorios
const hbs = require('hbs')//Motor de plantillas

app.use( express.static('public'))//Se usa para que cualquier archivo estatico este disponible

// Establece si las vistas existen 
app.set('views', path.join(__dirname+ '/public/views' ))
// Establece que se utilizaran archivos hbs para las vistas
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/partials')

//Esta es la respuesta que se le muestra al cliente
app.get('/', (req, res)=>{
    res.render ('login')//render muestra un formato legible al cliente
})
app.get('/usuarios', (req, res)=>{
    res.render('usuarios')
})
app.get('/roles', (req, res)=>{
    res.render('roles')
})

app.get('/vigilantes', (req, res)=>{
    res.render('vigilantes')
})

app.listen(port, console.log(`Escuchando por el puerto ${port}`))