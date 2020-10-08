const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre:String
})


module.exports = mongoose.model('Usuario',usuarioSchema);