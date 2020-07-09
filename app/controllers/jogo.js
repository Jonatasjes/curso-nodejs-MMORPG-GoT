module.exports.controllerJogo = (app,req,res)=>{

    if(req.session.autorizado){
        res.render('jogo', {img_casa: req.session.casa})
    } else {
        res.send('Usuário precisa fazer login')
    }
    
}

module.exports.controllerSair = (app,req,res)=>{
    req.session.destroy((err)=>{
        res.render('index', { validacao: {} })
    })
}