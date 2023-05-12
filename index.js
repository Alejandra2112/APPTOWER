const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express()

const puerto = 8081
app.use(express.static('PUBLIC'))   

app.set('views', path.join(__dirname+'/PUBLIC/VISTAS'))//direccion de las vistas
app.set('view engine', 'hbs')//Motor de plantillas

hbs.registerPartials(__dirname+ '/PUBLIC/PARTIALS');    



app.get('/', (req, res) => {
    res.render('dashboard')
    
})
app.get('/usuarios', (req, res)=>{
    res.render ('usuarios')//render muestra un formato legible al cliente
})
app.get('/roles', (req, res)=>{
    res.render('roles')
})

app.get('/vigilantes', (req, res)=>{
    res.render('vigilantes')
})
app.get('/cuenta', (req, res) => {
    res.render('cuenta_cobro')
})
app.get('/propietarios', (req, res) => {
    res.render('propietarios')
})


app.listen(puerto, () => {
    console.log(`Escuchando por el puerto ${puerto}`)
})

console.log("hola soy aleja");

