const conn = require("../mysql-connection");

module.exports = ({
    cadastro: (req, res) => { },
    consultar: (req, res) => {
        conn.raw("SELECT * FORM CLEINTES").then((data) => {
            res.status(200).send(data[0]);
        }).catch((erro) => {
            console.log(erro);
            res.status(500).send("Erro ao consultar os clientes!");
        });
    },
    atualizar: (req, res) => { },
    deletar: (req, res) => { }
})