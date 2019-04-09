const Users = require('./users.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'victor_castro';

exports.createUser = (req, res, next) => {
    const newUser = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password)
    }

    Users.create(newUser, (err, user) => {
        if (err && err.code === 11000) return res.status(409).send({ message: 'Username already exists' });
        if (err) return res.status(404).send({ message: 'Server error' });
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id },
            SECRET_KEY, {
                expiresIn: expiresIn
            });
        const dataUser = {
                username: user.username,
                accessToken: accessToken,
                expiresIn: expiresIn
            }
            //response frontend
        res.send({ dataUser });
    });
}

exports.loginUser = (req, res, next) => {
    const userData = {
        username: req.body.username,
        password: req.body.password
    }
    Users.findOne({ username: userData.username }, (err, user) => {
        if (err) return res.status(500).send('Server error!');
        if (!user) {
            //email doen not exist
            res.status(409).send({ message: 'Something is wrong' });
        } else {
            const resultPassword = bcrypt.compareSync(userData.password, user.password);
            if (resultPassword) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });

                const dataUser = {
                    username: user.username,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                }
                res.send({ dataUser });
            } else {
                //password wrong
                res.status(409).send({ message: 'Something is wrong' });
            }
        }
    });
}

exports.getUsers = (req, res, next) => {
    Users.get({}, (err, users) => {
        if (err) return res.json({ error: err });
        res.json({ Users: users });
    })
}

exports.getUser = (req, res, next) => {
    Users.get({ _id: req.params.id }, (err, user) => {
        if (err) return res.json({ error: err });
        res.json({ User: user });
    })
}

exports.updateUser = (req, res, next) => {
    const user = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password)
    }
    Users.update({ _id: req.params.id }, user, (err, user) => {
        if (err) return res.json({ error: err });
        res.json({ message: 'User updated successfully' });
    });
}

exports.deleteUser = (req, res, next) => {
    Users.delete({ _id: req.params.id }, (err, user) => {
        if (err) return res.json({ error: err });
        res.json({ message: 'User deleted successfully' });
    })
}