const controleClientes = require("../model/clientes")


const todosClientes = async (req, res) => {
    try {
        const allClientes = await controleClientes.find({}, null);
        res.status(200).json(allClientes)
    } catch {
        res.status(500).json({ message: error.message })
    }
}

const clienteID = async (req, res) => {
    try {
        const { id } = req.params;
        const encontrarCliente = await todosClientes.findByID(id);
        if (!encontrarCliente.length) {
            return res.status(404).json({ message: "ID inexistente" })
        }
        res.status(200).json(encontrarCliente)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addCliente = async (req,res) => {

    try {
        const  {
            cliente, 
            procedimento,
            data_procedimento,
            valorProcedimento
        } = req.params

        const novoCliente = new controleClientes({
            cliente,
            procedimento,
            data_procedimento,
            valorProcedimento
        })

        const salvarCliente = await novoCliente.save();

        res.status(200).json({message: "Novo cliente adicionado com sucesso"})
    } catch (error) {
        res.status(500).json({message: "Falha ao adicionar o cliente"})
        
    };
};

const editarClienteById = async(req,res) => {
    try {

        const {
            procedimento,
            data_procedimento,
            valorProcedimento
        } = req.body;

        const clienteEditar = await controleClientes.findByIdAndUpdate(
            req.params.id, 
            {
                procedimento,
                data_procedimento,
                valorProcedimento
            }
        )

        res.status(200).json({message: "Edição no cadastro realizada com sucesso"})
       
    } catch (error) {
        res.status(500).json({message: "Falha na edição do cadastro"})
    }
}

const deletarCliente = async (req,res) => {
    try {
        const { id } = req.params
        const procurarCliente = await controleClientes.findByID(id);

        if (procurarCliente == null) {
            return res.status(404).json({message: `O cliente com id ${id} não foi encontrado`})
        }
        await procurarCliente.remove();
        res.status(200).json({message: `o cliente com id ${id} foi deletado com sucesso`})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    todosClientes,
    clienteID,
    addCliente,
    editarClienteById,
    deletarCliente
}