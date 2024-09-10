const express = require("express");

const app = express();
// base_url
// http://localhost:8080/
app.get("/", (request, response) => {
    response.status(200).send("O seu servidor está funciononando meu amigo! 🦧");
});
app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080! 🚀");
});
