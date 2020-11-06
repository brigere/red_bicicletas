const Usuario = require('../models/usuario')
const Token = require('../models/token');

module.exports = {
    login:(req,res)=>{
        res.render('users/login')
    },
    register:(req,res)=>{
        res.render('users/register')  
    },
    authUser:(req,res)=>{
        res.send('ok')
    },
    create:(req,res)=>{

        Usuario.create({
            nombre:req.body.nombre,
            email:req.body.email,
            password:req.body.password
        },(err,nuevoUsuario)=>{
            if(!err){
                nuevoUsuario.enviar_mail()
                res.render('users/verificarmail')
            }else{
                res.send('a ocurrido un error')
            }
            
        })
    },
    checkToken:async(req,res)=>{
        try{
            Token.findOne({token:req.params.code},(err,tkn)=>{
                console.log(`token encontrado, usuario: ${tkn.userId}`)
            }).then(tkn => {
                Usuario.findOneAndUpdate({_id:tkn.userId},{verificado:true},(err,result)=>{
                    console.log(`usuario actualizado: ${result}`)
                })
            })
            res.redirect('/')
        }catch(e){
            console.log(e)
            res.send('ha ocurrido un error')
        }

    },
    logout:(req,res)=>{
        req.logout();
        res.redirect('/');
    }
}