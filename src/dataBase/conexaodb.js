require('dotenv-safe').config()
const DATABASE_URI = process.env.DATABASE_URI
const mongoose = require("mongoose")
const dotenv = require('dotenv')
mongoose.set('strictQuery', false);

const connect = async () => {
    try {
        await mongoose.connect(DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("O BANCO ESTÁ CONECTADO");
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    connect
}