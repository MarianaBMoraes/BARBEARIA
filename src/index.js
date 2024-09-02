const express = require("express");
const cep_endereco = require("./middlewares/cep_endereco.js");
const cliente_controller = require("./controllers/cliente.js");
const barbeiro_controller = require("./controllers/barbeiro.js");
const barbearia_controller = require("./controllers/barbearia.js");
const rede_controller = require("./controllers/rede.js");
const usuario_router = require("./routes/usuario.js");
const app = express();
const port = 5000;

app.use(express.json());
// app.use(cep_endereco) // Middleware de uso global

//cliente

app.get("/cliente", (req, res) => {
  res.json(cliente_controller.index());
});

app.get("/cliente/:id", (req, res) => {
  res.json(cliente_controller.show(req.params.id));
});

app.post("/cliente", (req, res) => {
  const code = cliente_controller.store(req.body);
  res.status(code).json();
});

app.put("/cliente/:id", (req, res) => {
  const code = cliente_controller.update(req.body, req.params.id);
  res.status(code).json();
});

app.delete("/cliente/:id", (req, res) => {
  cliente_controller.destroy(req.params.id);
  res.json();
});

// barbeiro

app.get("/barbeiro", (req, res) => {
  res.json(barbeiro_controller.index());
});

app.get("/barbeiro/:id", (req, res) => {
  res.json(barbeiro_controller.show(req.params.id));
});

app.post("/barbeiro", (req, res) => {
  const code = barbeiro_controller.store(req.body);
  res.status(code).json();
});

app.put("/barbeiro/:id", (req, res) => {
  const code = barbeiro_controller.update(req.body, req.params.id);
  res.status(code).json();
});

app.delete("/barbeiro/:id", (req, res) => {
  barbeiro_controller.destroy(req.params.id);
  res.json();
});

//barbearia

app.get("/barbearia", (req, res) => {
  res.json(barbearia_controller.index());
});

app.get("/barbearia/:id", (req, res) => {
  res.json(barbearia_controller.show(req.params.id));
});

app.post("/barbearia", cep_endereco, (req, res) => {
  const code = barbearia_controller.store(req.body);
  res.status(code).json();
});

app.put("/barbearia/:id", cep_endereco, (req, res) => {
  const code = barbearia_controller.update(req.body, req.params.id);
  res.status(code).json();
});

app.delete("/barbearia/:id", (req, res) => {
  barbearia_controller.destroy(req.params.id);
  res.json();
});

//rede

app.get("/rede", (req, res) => {
  res.json(rede_controller.index());
});

app.get("/rede/:id", (req, res) => {
  res.json(rede_controller.show(req.params.id));
});

app.post("/rede", (req, res) => {
  const code = rede_controller.store(req.body);
  res.status(code).json();
});

app.put("/rede/:id", (req, res) => {
  const code = rede_controller.update(req.body, req.params.id);
  res.status(code).json();
});

app.delete("/rede/:id", (req, res) => {
  rede_controller.destroy(req.params.id);
  res.json();
});

app.use("/usuario", usuario_router);

app.listen(port, () => {
  console.log(`Server running in ${port} port`);
});
