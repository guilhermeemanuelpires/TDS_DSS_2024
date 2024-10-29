const conn = require("../mysql-connection");

// CRUD
module.exports = {
    // cadastro: (req, res) => { },
    consultar: async (req, res) => {

        try {
            const data = await conn.raw("SELECT * FROM PRODUTO");
            return res.send(data[0]);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "erro ao consultar os produtos!" });
        }
    },
    // atualizar: (req, res) => { },
    // deletar: (req, res) => { }
}