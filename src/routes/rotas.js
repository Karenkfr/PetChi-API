const controller = require("../controller/controleClientes")
const express = require("express")
const router = express.Router()

router.get("/todos", controller.todosClientes)
router.get("/cliente/:id", controller.clienteID)
router.post("/novo", controller.addCliente)
router.patch("/cliente/:id", controller.editarClienteById)
router.delete("/cliente/:id", controller.deletarCliente)

module.exports = router;