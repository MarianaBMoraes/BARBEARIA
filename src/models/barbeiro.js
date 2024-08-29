let proxId = 1

const model = (boby, id = nextId++) => {
  
    if (
      body.data > 0 &&
      body.hora > 0 &&
      body.filme_id != undefined &&
      body.sala_id != undefined &&
      filme_controller.show(body.filme_id) &&
      sala_controller.show(body.sala_id) &&
      body.cadeiras && validarCadeiras(body.cadeiras)
    ) {
      return {
        id,
        data: body.data,
        hora: body.hora,
        filme_id: body.filme_id,
        sala_id: body.sala_id,
        cadeiras: body.cadeiras
      };
    }
  };