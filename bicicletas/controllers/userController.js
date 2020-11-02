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
        if(req.body.password != req.body.confirmpass){
            res.render('users/register',{
                errors:{
                    confirm_password:{message:'Los passwords no coinciden'}
                }
            })
        }
    }
}