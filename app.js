const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
const Musica = require('./database/models/musica');
// configuracion cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());
// creacion de un musica modo test
const musica = new Musica({

    numero: 12,
    nombre: 'Juan luiz',
    duracion: '2 hrs',
    archivo: 'Latino',
    albumID: ''
});
musica.save();
app.get('/getMusica', (req, res) => {
    Musica.find({})
        .then((list) => {res.send(list); console.log(list)})
        .then((error) => {console.log(error)});
})

app.listen( 3000, () => {
    console.log('iniciando server en puerto 3000');
});