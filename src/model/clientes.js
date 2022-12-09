const express = require('express')
const app = express()
const port = 3000
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
            type: moment().format('DD/MM/YYYY'),
            require: true
        },

        valorProcedimento: {
            type: Number,
            require: true
        }
    }
})

const Model = mongoose.Model("estetica", clientesPet )