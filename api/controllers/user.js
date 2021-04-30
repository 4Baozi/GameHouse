const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;

router.get('/', (req, res) => {
    User.findAll({}).then((users) => res.json(users));
});

router.post('/', (req, res) => {
    let { username, email, password } = req.body;
    User.create({ username, email, passwordHash })
        .then((user) => {
            res.status(201).json(user);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;
