module.exports = function(app) {
    app.get('/cadastro' ,(req, res) => {
        app.app.controllers.cadastro.controllerCadastro(app,req,res)
    })
}