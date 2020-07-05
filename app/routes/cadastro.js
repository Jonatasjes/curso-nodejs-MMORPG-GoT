module.exports = (app) => {
    app.get('/cadastro' ,(req, res) => {
        app.app.controllers.cadastro.controllerCadastro(app,req,res)
    })

    app.post('/cadastrar', (req,res) => {
        app.app.controllers.cadastro.controllerCadastrar(app,req,res)
    })
}


