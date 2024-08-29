const usuario_controller = require("./usuario.js");
let nextId = 1;

const model = (body, id = nextId++) => {
  if (
    rede.nome != undefined &&
    rede.nome != "" &&
    rede.usuario_id != undefined &&
    rede.usuario_id != undefined &&
    usuario_controller.show(rede.usuario_id)
  )
    return {
      id,
      nome: rede.nome,
      usuario_id: rede.usuario_id,
    };
};

module.exports = model;
