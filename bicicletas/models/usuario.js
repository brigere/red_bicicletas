const mongoose = require('mongoose');
const Reserva = require('./reserva');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const validateEmail = (email)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const usuarioSchema = new Schema({
    nombre:{
        type:String,
        trim:true, //borra espacios en blanco al principio y final
        required:[true,'Debe ingresat nombre']
    },
    email:{
        type:String,
        trim:true,
        required:[true,'Ingresar email'],
        lowercase:true,
        unique:true,
        validate:[validateEmail,'Ingrese mail valido'],
        match:[/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
    },
    password:{
        type:String,
        required:[true,'Ingresar password valido']
    },
    passwordResetToken:String,
    passwordResetTokenExpires:Date,
    verificado:{
        type:Boolean,
        default:false
    }
})


//funcion que se ejecuta antes del save
usuarioSchema.pre('save',function(next){
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password,saltRounds)
    }
    next()
})

//Validacion de email unique
usuarioSchema.plugin(uniqueValidator,'El email ya esta registrado')

usuarioSchema.methods.validatePassword = function(password){
    return bcrypt.compareSync(password,this.password)
}

usuarioSchema.methods.reservar = function(biciId,desde,hasta,cb){
    let reserva = new Reserva({usuario:this._id,desde:desde,hasta:hasta})
    console.log(reserva)
    reserva.save(cb)
}

module.exports = mongoose.model('Usuario',usuarioSchema);