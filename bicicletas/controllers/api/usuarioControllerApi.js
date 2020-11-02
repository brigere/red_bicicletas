const Usuario = require('../../models/usuario')

module.exports = {
    usuariosList : (req,res)=>{
        Usuario.find({},(e,usuarios)=>{
            res.status(200).json({
                usuarios:usuarios
            })
        })
    },
    usuariosCreate:(req,res)=>{
        let usuario = new Usuario({nombre:req.body.nombre})
        usuario.save((e)=>{
            e?console.log(e):res.status(200).json({usuario:usuario})
        })
    },
    usuariosReservar: (req,res)=>{ 
        Usuario.findById(req.body.userId,(e,usuario)=>{
            if(e){
                res.send(e)
            }else{
                console.log(usuario)
                res.send(usuario)
            }
        })
    }     
}