const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = new Schema({
    userId:{type:String, required:true},
    token:{type:String, required:true, unique:false},
    createdAt:{type:Date, default:Date.now, expires:1000*60*60*2} //expires 2hs
})

module.exports = mongoose.model('Token',tokenSchema)