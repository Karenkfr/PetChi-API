const mongoose = require("mongoose")
const model = require("../model/clientes.js")
const clientesPet = new mongoose.Schema({

    _id: {
        type:mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    _cliente: {
        pet: {
            especie: {
                type: String,
                require: true
            },

            nome: {
                type: String,
                require: true
            },

            porte: {
                type: String,
                require: true
            },

            raca: {
                type: String,
                require: true
            }

        },

        procedimento : {
            type: String,
            require: true
        },

        data_procedimento: {
            type: Date,
            require: true
        },

        valorProcedimento: {
            type: Number,
            require: true
        }
    }
})

const Model = mongoose.model("estetica", clientesPet )

module.exports = Model