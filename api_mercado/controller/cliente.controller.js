const conn = require("../mysql-connection");

module.exports = ({
    cadastro: (req, res) => { },
    // consultar: (req, res) => {
    //     conn.raw("SELECT * FROM CLIENTE").then((data) => {
    //         res.send(data[0]);
    //     }).catch((erro) => {
    //         res.send("Erro ao consultar os clientes!");
    //     });
    // },


    consultar: async (req, res) => {

        try {
            const data = await conn.raw("SELECT * FROM cliente");
            res.send(data[0]);
        } catch (error) {
            res.send("Erro ao consultar os clientes!");
        }



    },
    atualizar: (req, res) => { },
    deletar: (req, res) => { }
})