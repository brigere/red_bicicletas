const Usuario = require('../../models/usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const usuario = require('../../models/usuario');

module.exports = {
    authenticate:(req,res,next)=>{
        Usuario.findOne({email:req.body.email},(err,userInfo)=>{
            if(err) next(err);
            if(userInfo===null){
                return res.status(401).json({status:'error',data:null})
            }
            if(userInfo!=null && bcrypt.compareSync(req.body.password, userInfo.password)){
                userInfo.save((err,user)=>{
                    const token = jwt.sign({id:user._id}, req.app.get('secretKey'), {expiresIn:'7d'})
                    res.status(200).json({message:'usuario encontrado',data:{
                        usuario:user,token:token
                    }})
                })
            }else{
                res.status(401).json({status:'error',message:'mail/password invalido',data:null})
            }
        })
    }
}
