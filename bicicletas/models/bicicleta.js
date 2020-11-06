const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bicicletaSchema = new Schema({
    modelo:String,
    ubicacion:{
        code:Number,
        type:[Number],
        index:{ type:'2dsphere', sparse:true }
    }
})

bicicletaSchema.methods.toString = function(){
    return `Modelo: ${this.modelo}`
}

bicicletaSchema.statics.createInstance = function(code,modelo,ubicacion){
    return new this({
        code:code,
        modelo:modelo,
        ubicacion:ubicacion
    })
}

bicicletaSchema.statics.allBicis = function(cb){
    return this.find({},cb)
}

bicicletaSchema.statics.add = function(newBici,cb){
    return this.create(newBici,cb)
}

bicicletaSchema.statics.findById = function(id,cb){
    return this.find({_id:id},cb)
}

bicicletaSchema.statics.removeById = function(id,cb){
    return this.deleteOne({_id:id},cb)
}

module.exports = mongoose.model('Bicicleta',bicicletaSchema);