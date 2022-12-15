const mongoose = require("mongoose")
const model = require("../model/clientes.js")

const ClientesPet = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    nome: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        require: true
    },

    porte: {
        type: String,
        required: true
    },

    raca: {
        type: String,
        required: true
    },

    procedimento: {
        type: String,
        required: true
    },

    data_procedimento: {
        type: Date,
        required: true
    },

    valorProcedimento: {
        type: Number,
        required: true
    }
})

const Model = mongoose.model("estetica", ClientesPet)

module.exports = Model