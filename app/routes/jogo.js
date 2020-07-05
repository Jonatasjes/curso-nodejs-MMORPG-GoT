module.exports = (app) => {
    app.get('/jogo', (req,res)=> {
        res.render('jogo')
    })
}