const mongoose = require("mongoose");

function Connect(){
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("Conexão com MongoDB estabelecida com sucesso!");
    }).catch(error => {
        console.log("Erro ao conectar com o servidor", error);
    });
}

module.exports = Connect;
