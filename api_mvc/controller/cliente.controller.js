
const clientes = [];

const cadastro = (req, res) => {
    const { id, nome, email, senha } = req.body;

    console.log(req.body);

    clientes.push({
        id, nome, email, senha
    })

    res.send(req.body);
}

module.exports = cadastro;