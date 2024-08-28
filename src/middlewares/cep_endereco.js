const axios = require("axios");

const cep_endereco = (req,res,next) => {
    axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
    .then(resposta => {
        console.log(resposta)
    })
}

module.exports = cep_endereco