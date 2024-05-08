const User = require("../models/User");
const axios = require('axios'); // Importe o módulo axios

const userController = {};

// cria
userController.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

//lista
userController.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send({error:'Erro no servidor interno'});
    }
};

//lista por ID
userController.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send({error:'Erro no servidor interno'});
    }
};

//Atualiza por ID
userController.updateUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "password"];
    const isValidOperation = updates.every(update =>
        allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates!" });
    }

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }

        updates.forEach(update => {
            user[update] = req.body[update];
        });
        await user.save();

        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

//deleta por ID
userController.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send({error:'Erro no servidor interno'});
    }
};

// Login
userController.login = async (req, res) => {
    // Procurar o usuário no banco de dados
    const user = await User.findOne({ name: req.body.username });
    if (!user) {
        return res.status(400).send({ error: "Usuário não encontrado" });
    }

    // Comparar a senha fornecida com a senha armazenada
    if (req.body.password !== user.password) {
        return res.status(400).send({ error: "Senha incorreta" });
    }

    // Se tudo estiver correto, retornar uma resposta de sucesso
    res.send({ success: "Login bem-sucedido!" });
};

// Criar Funcionário
userController.criarFuncionario = async (req, res) => {
    // Depois de autenticar o usuário...
    fetch('http://localhost:5000/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            primeiro_nome: 'Nome',
            sobrenome: 'Sobrenome',
            data_admissao: '2024-05-06',
            setor: 'Setor',
            cargo: 'Cargo'
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        res.send({ success: "Funcionário criado com sucesso!" });
    })
    .catch(error => {
        console.log(error);
        res.status(500).send({ error: "Erro ao criar o funcionário" });
    });
};

module.exports = userController;