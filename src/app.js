const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json')
require('dotenv-safe').config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./dataBase/conexaodb.js")
const rotaDeAcesso = require("./routes/rotas.js")


const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect()

app.use(rotaDeAcesso)
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app;