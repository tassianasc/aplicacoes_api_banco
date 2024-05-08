const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


router.post("/users", userController.createUser);

router.get("/users", userController.getAllUsers);


router.get("/users/:id", userController.getUserById);

router.patch("/users/:id", userController.updateUser);


router.delete("/users/:id", userController.deleteUser);

router.post("/entrar", userController.login);

module.exports = router;
