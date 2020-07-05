/* Importe do mongoDB */
const mongo = require('mongodb')

const connMongoDB = () => {

    const db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost/3000',
            27017,
            {}
        ),
        {}
    )
    return db
}

module.exports = () => {
    return connMongoDB    
}