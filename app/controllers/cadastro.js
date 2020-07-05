module.exports.controllerCadastro = (app, req, res) => {
    res.render('cadastro', {validacao: {}, dadosForm: {}})
}

module.exports.controllerCadastrar = (app,req,res) => {
    var dadosForm = req.body

    req.assert('nome', 'Nome não pode ser vazio.').notEmpty()
    req.assert('usuario', 'Usuário não pode ser vazio.').notEmpty()
    req.assert('senha', 'Senha não pode ser vazio.').notEmpty()
    req.assert('casa', 'Casa não pode ser vazio.').notEmpty()

    var erros = req.validationErrors()

    if(erros){
        res.render('cadastro', {validacao: erros, dadosForm: dadosForm})
        return
    }
    res.send('Podemos cadastrar')
}