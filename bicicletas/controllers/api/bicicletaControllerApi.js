const Bicicleta = require('../../models/bicicleta');

module.exports = {
    bicicleta_list: (req,res)=>{
        console.log(Bicicleta.allBicis)
        res.status(200).json(Bicicleta.allBicis)
    },
    bicicleta_create: (req,res)=>{
        let newBici = new Bicicleta(parseInt(req.body.id),req.body.modelo,[req.body.lat,req.body.long]);
        
        Bicicleta.add(newBici);

        res.status(200).json(newBici);
    },
    bicicleta_delete: (req,res)=>{
        Bicicleta.removeById(req.body.id);
        res.json(Bicicleta.allBicis)
    }

}