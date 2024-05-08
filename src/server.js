const cors = require("cors")
const express = require("express");
const session = require('express-session'); // Importe o módulo express-session
const app = express();
const userRoutes = require("../src/routes/userRoutes");
require("dotenv").config({ path: "src/.env" });
const ConnectMongoDB = require("../src/database");

ConnectMongoDB();
app.use(cors());

app.use(express.static('public'))

app.use(session({  // Inicialize o middleware de sessão
  secret: 'sua-chave-secreta',
  resave: false,
  saveUninitialized: true
}));

app.use(express.json());
app.use("/api", userRoutes);

app.get('/home', function(req, res) {
  res.send('Bem-vindo à página inicial!');
});

// Inicie o servidor e armazene o objeto de servidor retornado
const server = app.listen(process.env.PORT || 3001, () => {
    const { address, port } = server.address();
    const hostname = address === "::" ? "localhost" : address;
    console.log(`Servidor rodando em em http://localhost:${port}/api/users`);
});

console.log(process.env.MONGODB_URI);
console.log(process.env.PORT);
