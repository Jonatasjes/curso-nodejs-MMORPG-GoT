const { MongoClient } = require("mongodb")

function JogoDAO(connection) {
    this._connection = connection()
}

JogoDAO.prototype.gerarParametros = function(usuario){
    this._connection.open( (err, mongoclient) => {
        mongoclient.collection('jogo', (err, collection)=> {
            collection.insert({
                usuario: usuario,
                moeda: 15,
                suditos: 10,
                temor: Math.floor(Math.random() * 1000),
                sabedoria: Math.floor(Math.random() * 1000),
                comercio: Math.floor(Math.random() * 1000),
                magia: Math.floor(Math.random() * 1000)
            })
        })
    })
}

JogoDAO.prototype.iniciaJogo = function(res, usuario, casa){
    this._connection.open((err,mongoclient)=>{
        mongoclient.collection('jogo', (err,collection)=>{
            collection.find({usuario: usuario}).toArray((err,result)=>{
                console.log(result)

                res.render('jogo', {img_casa: casa, jogo: result[0]})

                mongoclient.close()
            })
        })
    })
}

module.exports = function(){
    return JogoDAO
}