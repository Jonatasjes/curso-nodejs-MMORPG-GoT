module.exports.controllerIndex = (app, req,res) => {
    res.render('index', {validacao: {}})
} 

module.exports.controllerAutenticar = (app,req,res) => {
    const dadosForm = req.body

    req.assert('usuario', 'Usuário não deve ser vazio').notEmpty()
    req.assert('senha', 'Senha não deve ser vazia').notEmpty()

    const erros = req.validationErrors()

    if(erros) {
        res.render('index', {validacao: erros})
        console.log(erros)
        return
    }

    res.send('tudo ok para criar a sessão')
}