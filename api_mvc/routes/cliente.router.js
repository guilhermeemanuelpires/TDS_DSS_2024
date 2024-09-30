const express = require('express');
const clienteController = require('../controller/cliente.controller');

const routes = express.Router();


routes.post("/cadastro", clienteController);

module.exports = routes;