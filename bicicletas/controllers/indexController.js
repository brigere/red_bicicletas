module.exports={
    home:(req,res)=>{
        console.log(`req.user: ${req.user}`)
        res.render('index',{
            userName: req.session.userName || null
        })
    }
}