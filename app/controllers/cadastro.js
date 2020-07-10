module.exports.controllerCadastro = (app, req, res) => {
    res.render('cadastro', {validacao: {}, dadosForm: {}})
}

module.exports.controllerCadastrar = (app,req,res) => {
    const dadosForm = req.body

    req.assert('nome', 'Nome não pode ser vazio.').notEmpty()
    req.assert('usuario', 'Usuário não pode ser vazio.').notEmpty()
    req.assert('senha', 'Senha não pode ser vazio.').notEmpty()
    req.assert('casa', 'Casa não pode ser vazio.').notEmpty()

    const erros = req.validationErrors()

    if(erros){
        res.render('cadastro', {validacao: erros, dadosForm: dadosForm})
        return
    }

    const connection = app.config.dbConnection

    const UsuariosDAO = new app.app.models.UsuariosDAO(connection)
    const JogoDAO = new app.app.models.JogoDAO(connection)

    UsuariosDAO.inserirUsuario(dadosForm)
    JogoDAO.gerarParametros(dadosForm.usuario)

    res.send('Podemos cadastrar')
}