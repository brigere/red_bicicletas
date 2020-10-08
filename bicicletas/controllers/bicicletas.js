const Bicicleta = require('../models/bicicleta')

module.exports = {
    index:(req,res)=>{
        Bicicleta.allBicis((err,bicicletas)=>{
            if(err){res.json(err)}
            res.render('bicicletas/index',{
                bicicletas:bicicletas
            })
        })
    }
}