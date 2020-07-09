module.exports = (app) => {
    app.get('/jogo', (req,res)=> {
        app.app.controllers.jogo.controllerJogo(app,req,res)
    })

    app.get('/sair', (req,res)=>{
        app.app.controllers.jogo.controllerSair(app,req,res)
    })
}