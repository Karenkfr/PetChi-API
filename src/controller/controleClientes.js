const controleClientes = require("../model/clientes")


const todosClientes = async (req, res) => {
    try {
        const allClientes = await controleClientes.find({}, null);
        res.status(200).json(allClientes)
    }catch {
        res.status(500).json({message: error.message})
    }
}

const clienteID = async (req, res) => {
    try {
        const { id } = req.params;
        const encontrarCliente = await todosClientes.findByID(id);
        if (!encontrarCliente.length) {
            return res.status(404).json({message: "ID inexistente"})
        }
        res.status(200).json(encontrarCliente)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const addCliente = async (req, res) => {
    try {
        const {
            cliente,
            procedimento,
            data_procedimento,
            valorProcedimento
        } = req.params
    }
}