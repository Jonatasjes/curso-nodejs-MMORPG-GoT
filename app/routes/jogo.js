module.exports = (app) => {
    app.get('/jogo', (req,res)=> {
        app.app.controllers.jogo.controllerJogo(app,req,res)
    })
}