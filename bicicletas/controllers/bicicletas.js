const bicicleta = require('../models/bicicleta')

module.exports = {
    index:(req,res)=>{
        console.log(`bicicletas: ${bicicleta.allBicis}`)
        res.render('bicicletas/index',{
            bicicletas: bicicleta.allBicis
        })
    }
}