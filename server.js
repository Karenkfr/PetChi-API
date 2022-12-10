const app = require("./src/app.js");
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send({message: "Boas vindas à PetChi API"})
})

app.listen(PORT, () => {
    console.log(`O SERVIDOR ESTÁ CONECTADO NA PORTA ${PORT} E ESTÁ FUNCIONANDO`);
})