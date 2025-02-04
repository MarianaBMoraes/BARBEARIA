const express = require("express");
const cep_endereco = require("./middlewares/cep_endereco.js");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cep_endereco);

// const atendimento_controller = require("./controllers/atendimento.js");
// const servico_controller = require("./controllers/servico.js");
// const cliente_controller = require("./controllers/cliente.js");
// const barbeiro_controller = require("./controllers/barbeiro.js");
// const barbearia_controller = require("./controllers/barbearia.js");
// const rede_controller = require("./controllers/rede.js");
// const usuario_controller = require("./controllers/usuario.js");

app.post("/barbearia", (req, res) => {
  console.log(req.body);
  res.json();
});

app.listen(port, () => {
  console.log(`Server running in ${port} port`);
});

// // GERENCIAMENTO DE ATENDIMENTOS
// app.post("/atendimento", (req, res) => {
//   const atendimento = req.body;
//   const code = atendimento_controller.store(atendimento);
//   res.status(code).json();
// });

// app.get("/atendimento", (req, res) => {
//   const atendimentos = atendimento_controller.index();
//   res.json(atendimentos);
// });

// app.get("/atendimento/:id", (req, res) => {
//   const atendimento = atendimento_controller.show(req.params.id);
//   res.json(atendimento);
// });

// app.put("/atendimento/:id", (req, res) => {
//   const atendimento = req.body;
//   const code = atendimento_controller.update(req.params.id, atendimento);
//   res.status(code).json();
// });

// app.delete("/atendimento/:id", (req, res) => {
//   atendimento_controller.destroy(req.params.id);
//   res.json();
// });
// // GERENCIAMENTO DE ATENDIMENTOS

// // GERENCIAMENTO DE SERVIÇOS
// app.post("/servico", (req, res) => {
//   const servico = req.body;
//   const code = servico_controller.store(servico);
//   res.status(code).json();
// });

// app.get("/servico", (req, res) => {
//   const servicos = servico_controller.index();
//   res.json(servicos);
// });

// app.get("/servico/:id", (req, res) => {
//   const servico = servico_controller.show(req.params.id);
//   res.json(servico);
// });

// app.put("/servico/:id", (req, res) => {
//   const servico = req.body;
//   const code = servico_controller.update(req.params.id, servico);
//   res.status(code).json();
// });

// app.delete("/servico/:id", (req, res) => {
//   servico_controller.destroy(req.params.id);
//   res.json();
// });

// // GERENCIAMENTO DE SERVIÇOS

// // GERENCIAMENTO DE CLIENTES
// app.post("/cliente", (req, res) => {
//   const cliente = req.body;
//   const code = cliente_controller.store(cliente);
//   res.status(code).json();
// });

// app.get("/cliente", (req, res) => {
//   const clientes = cliente_controller.index();
//   res.json(clientes);
// });

// app.get("/cliente/:id", (req, res) => {
//   const cliente = cliente_controller.show(req.params.id);
//   res.json(cliente);
// });

// app.put("/cliente/:id", (req, res) => {
//   const cliente = req.body;
//   const code = cliente_controller.update(req.params.id, cliente);
//   res.status(code).json();
// });

// app.delete("/cliente/:id", (req, res) => {
//   cliente_controller.destroy(req.params.id);
//   res.json();
// });
// // GERENCIAMENTO DE CLIENTES

// // GERENCIAMENTO DE BARBEIROS
// app.post("/barbeiro", (req, res) => {
//   const barbeiro = req.body;
//   const code = barbeiro_controller.store(barbeiro);
//   res.status(code).json();
// });

// app.get("/barbeiro", (req, res) => {
//   const barbeiros = barbeiro_controller.index();
//   res.json(barbeiros);
// });

// app.get("/barbeiro/:id", (req, res) => {
//   const barbeiro = barbeiro_controller.show(req.params.id);
//   res.json(barbeiro);
// });

// app.put("/barbeiro/:id", (req, res) => {
//   const barbeiro = req.body;
//   const code = barbeiro_controller.update(req.params.id, barbeiro);
//   res.status(code).json();
// });

// app.delete("/barbeiro/:id", (req, res) => {
//   barbeiro_controller.destroy(req.params.id);
//   res.json();
// });

// // GERENCIAMENTO DE BARBEIROS

// // GERENCIAMENTO DE BARBEARIAS
// app.post("/barbearia", (req, res) => {
//   const barbearia = req.body;
//   const code = barbearia_controller.store(barbearia);
//   res.status(code).json();
// });

// app.get("/barbearia", (req, res) => {
//   const barbearias = barbearia_controller.index();
//   res.json(barbearias);
// });

// app.get("/barbearia/:id", (req, res) => {
//   const barbearia = barbearia_controller.show(req.params.id);
//   res.json(barbearia);
// });

// app.put("/barbearia/:id", (req, res) => {
//   const barbearia = req.body;
//   const code = barbearia_controller.update(req.params.id, barbearia);
//   res.status(code).json();
// });

// app.delete("/barbearia/:id", (req, res) => {
//   barbearia_controller.destroy(req.params.id);
//   res.json();
// });

// // GERENCIAMENTO DE BARBEARIAS

// // GERENCIAMENTO DE REDES
// app.post("/rede", (req, res) => {
//   const rede = req.body;
//   const code = rede_controller.store(rede);
//   res.status(code).json();
// });

// app.get("/rede", (req, res) => {
//   const redes = rede_controller.index();
//   res.json(redes);
// });

// app.get("/rede/:id", (req, res) => {
//   const rede = rede_controller.show(req.params.id);
//   res.json(rede);
// });

// app.put("/rede/:id", (req, res) => {
//   const rede = req.body;
//   const code = rede_controller.update(req.params.id, rede);
//   res.status(code).json();
// });

// app.delete("/rede/:id", (req, res) => {
//   rede_controller.destroy(req.params.id);
//   res.json();
// });

// // GERENCIAMENTO DE USUARIOS

// app.post("/usuario", (req, res) => {
//   const usuario = req.body;
//   const code = usuario_controller.store(usuario);
//   res.status(code).json();
// });

// app.get("/usuario", (req, res) => {
//   const usuarios = usuario_controller.index();
//   res.json(usuarios);
// });

// app.get("/usuario/:id", (req, res) => {
//   const usuario = usuario_controller.show(req.params.id);
//   res.json(usuario);
// });

// app.put("/usuario/:id", (req, res) => {
//   const usuario = req.body;
//   const code = usuario_controller.update(req.params.id, usuario);
//   res.status(code).json();
// });

// app.delete("/usuario/:id", (req, res) => {
//   usuario_controller.destroy(req.params.id);
//   res.json();
// });

// // GERENCIAMENTO DE USUARIOS

// app.listen(port, () => {
//   console.log("Gerenciador de baralho executando na porta: " + port);
// });
