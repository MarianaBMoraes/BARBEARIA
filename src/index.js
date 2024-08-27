const atendimento_controller = require("./controllers/atendimento.js");
const servico_controller = require("./controllers/servico.js");
const servico_controller = require("./controllers/servico.js");
const app = express();
const port = 3000;

app.use(express.json());

// GERENCIAMENTO DE ATENDIMENTOS
app.post("/atendimento", (req, res) => {
  const atendimento = req.body;
  const code = atendimento_controller.store(atendimento);
  res.status(code).json();
});

app.get("/atendimento", (req, res) => {
  const atendimentos = atendimento_controller.index();
  res.json(atendimentos);
});

app.get("/atendimento/:id", (req, res) => {
  const atendimento = atendimento_controller.show(req.params.id);
  res.json(atendimento);
});

app.put("/atendimento/:id", (req, res) => {
  const atendimento = req.body;
  const code = atendimento_controller.update(req.params.id, atendimento);
  res.status(code).json();
});

app.delete("/atendimento/:id", (req, res) => {
  atendimento_controller.destroy(req.params.id);
  res.json();
});
// GERENCIAMENTO DE ATENDIMENTOS

// GERENCIAMENTO DE SERVIÇOS
app.post("/servico", (req, res) => {
  const servico = req.body;
  const code = servico_controller.store(servico);
  res.status(code).json();
});

app.get("/servico", (req, res) => {
  const servicos = servico_controller.index();
  res.json(servicos);
});

app.get("/servico/:id", (req, res) => {
  const servico = servico_controller.show(req.params.id);
  res.json(servico);
});

app.put("/servico/:id", (req, res) => {
  const servico = req.body;
  const code = servico_controller.update(req.params.id, servico);
  res.status(code).json();
});

app.delete("/servico/:id", (req, res) => {
  servico_controller.destroy(req.params.id);
  res.json();
});

// GERENCIAMENTO DE SERVIÇOS

app.listen(port, () => {
  console.log("Gerenciador de baralho executando na porta: " + port);
});