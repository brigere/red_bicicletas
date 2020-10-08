const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const reservaSchema = new Schema({
    desde:Date,
    hasta:Date,
    bicicleta: {type:Schema.Types.ObjectId, ref:'Bicicleta'},
    usuario: {type:Schema.Types.ObjectId, ref:'Usuario'}
})

reservaSchema.methods.diasDeReserva = function(){
    return `Reserva desde ${desde} hasta ${hasta}`
}

module.exports = mongoose.model('Reserva',reservaSchema);