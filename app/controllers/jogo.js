module.exports.controllerJogo = (app,req,res)=>{

    if(req.session.autorizado !== true){
        res.send('Usuário precisa fazer login')
        return
    }

    const usuario = req.session.usuario
    const casa = req.session.casa

    const connection = app.config.dbConnection
    const JogoDAO = new app.app.models.JogoDAO(connection)

    JogoDAO.iniciaJogo(res, usuario, casa)
    
}

module.exports.controllerSair = (app,req,res)=>{
    req.session.destroy((err)=>{
        res.render('index', { validacao: {} })
    })
}