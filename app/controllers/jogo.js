module.exports.controllerJogo = (app,req,res)=>{

    if(req.session.autorizado){
        res.render('jogo')
    } else {
        res.send('Usuário precisa fazer login')
    }
    
}