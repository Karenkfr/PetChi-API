const app = require("./src/app");
const PORT = 3030;

app.listen(PORT, () => {
    console.log(`O SERVIDOR ESTÁ CONECTADO NA PORTA ${PORT} E ESTÁ FUNCIONANDO`);
})