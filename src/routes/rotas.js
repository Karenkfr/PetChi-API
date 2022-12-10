const controller = require("../controller/controleClientes")
const express = require("express")
const router = express.Router()

router.get("/todos", controller.todosClientes)
router.get("/:id", controller.clienteID)
router.post("/novo", controller.addCliente)
router.patch("/:id", controller.editarClienteById)
router.delete("/:id", controller.deletarCliente)




module.exports = router;