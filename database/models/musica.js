const mongoose = require('mongoose');
const musicaSchema = new mongoose.Schema({
    
    numero: {type: Number},
    nombre: { type: String },
    duracion: { type: String},
    archivo: { type: String},
    albumID: { type: Number}
})
const Musica = mongoose.model('musica', musicaSchema);
module.exports = Musica;