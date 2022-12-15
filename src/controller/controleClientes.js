const ControleClientes = require("../model/clientes")
const SECRET = process.env.SECRET
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const todosClientes = async (req, res) => {
    const authHeader = req.get(`Authorization`);
    const token = authHeader?.split(" ")[1] ?? ("Não autorizado");
    console.log(`My header:`, token);

    if (!token) {
        return res.status(401); // STATUS CODE 401: Unauthorized
    };

    const err = jwt.verify(token, SECRET, function (error) {
        if (error) return error
    });

    if (err) return res.status(401).send(`Não autorizado`)

    try {
        const allClientes = await ControleClientes.find({}, null);
        res.status(200).json(allClientes)
    } catch {
        res.status(500).json({ message: error.message })
    }
}



const clienteID = async (req, res) => {


    try {
        const { id } = req.params;

        const encontrarCliente = await ControleClientes.findById(id);
        if (!encontrarCliente) {
            return res.status(404).json({ message: "ID inexistente" })
        }
        res.status(200).json(encontrarCliente)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



const addCliente = async (req, res) => {


    try {
        const {
            nome,
            especie,
            porte,
            raca,
            procedimento,
            data_procedimento,
            valorProcedimento
        } = req.body

        const novoCliente = new ControleClientes({
            nome,
            especie,
            porte,
            raca,
            procedimento,
            data_procedimento,
            valorProcedimento
        })

        const salvarCliente = await novoCliente.save();

        res.status(200).json({ message: "Novo cliente adicionado com sucesso", salvarCliente })
    } catch (error) {
        res.status(500).json({ message: error.message })

    };
};



const editarClienteById = async (req, res) => {

    try {
        const {
            nome,
            especie,
            porte,
            raca,
            procedimento,
            data_procedimento,
            valorProcedimento
        } = req.body;

        const clienteEditar = await ControleClientes.findByIdAndUpdate(
            req.params.id,
            {
                nome,
                especie,
                porte,
                raca,
                procedimento,
                data_procedimento,
                valorProcedimento
            }
        )

        res.status(200).json({ message: "Edição no cadastro realizada com sucesso", clienteEditar })

    } catch (error) {
        res.status(500).json({ message: "Falha na edição do cadastro" })
    }
}



const deletarCliente = async (req, res) => {


    try {
        const { id } = req.params
        const procurarCliente = await ControleClientes.findByIdAndDelete(id);

        if (procurarCliente == null) {
            return res.status(404).json({ message: `O cliente com id ${id} não foi encontrado` })
        }
        res.status(200).json({ message: `o cliente com id ${id} foi deletado com sucesso` })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    todosClientes,
    clienteID,
    addCliente,
    editarClienteById,
    deletarCliente
}
