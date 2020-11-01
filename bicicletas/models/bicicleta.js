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


// function Bicicleta(id,modelo,ubicacion){
//     this.id=id;
//     this.modelo=modelo;
//     this.ubicacion=ubicacion;
    
// }

// Bicicleta.allBicis = [];
// Bicicleta.add = (aBici)=>{
//     Bicicleta.allBicis.push(aBici)
// };

// Bicicleta.findById = (id)=>{
//     let bici = Bicicleta.allBicis.find(x => x.id==id)
//     if(bici){
//         return bici}else{
//             throw new Error('No se encontro bicicleta')
//         }
// }

// Bicicleta.removeById = (id)=>{
//     Bicicleta.allBicis.splice(id,1)
// }

// let biciB = new Bicicleta(2,'mountain',[-34.60596,-58.380252]);
// let biciC = new Bicicleta(3,'urbana',[-34.60561,-58.38034]);
// let biciD = new Bicicleta(4,'urbana',[-34.615,-58.37]);
// let biciE = new Bicicleta(5,'urbana',[-34.604,-58.387]);

// Bicicleta.add(biciB);
// Bicicleta.add(biciC);
// Bicicleta.add(biciD);
// Bicicleta.add(biciE);

// Bicicleta.allBicis.forEach(bici => {
//     console.log(bici.ubicacion)
// })

// module.exports = Bicicleta