const Bicicleta = require('../../models/bicicleta');

module.exports = {
    bicicleta_list: (req,res)=>{
        Bicicleta.allBicis((err,bicicletas)=>{
            res.json(bicicletas)
        })
    },
    bicicleta_create: (req,res)=>{
        let newBici = Bicicleta.createInstance(
            req.body.code,
            req.body.modelo,
            [req.body.lat,req.body.long]
        )
        Bicicleta.add(newBici,(err,result)=>{
            err?res.json(err):res.json(result)
        })
    },
    bicicleta_delete: (req,res)=>{
        Bicicleta.removeById(req.body.id,(err,result)=>{
            err?res.json(err):res.json(result)
        });
        
    }

}