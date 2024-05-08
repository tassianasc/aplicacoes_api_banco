const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Create - POST - Cria usuário
router.post("/users", userController.createUser);

// Read - GET all users - Lê, lista usuários
router.get("/users", userController.getAllUsers);

// Read - GET user by ID - lista usuário por ID
router.get("/users/:id", userController.getUserById);

// Update - PATCH - atualiza usuário por ID
router.patch("/users/:id", userController.updateUser);

// Delete - DELETE - deleta usuário por ID
router.delete("/users/:id", userController.deleteUser);

// Rota de login - procura pelo usuário 
router.post("/entrar", userController.login);

module.exports = router;
