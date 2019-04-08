const Roles = require('./roles.dao');


exports.createRole = (req, res, next) => {
    const role = {
        name: req.body.name,
        description: req.body.description
    }

    Roles.create(role, (err, role) => {
        if (err && err.code === 11000) return res.status(409).send({ message: 'Role already exists' });
        if (err) return res.status(404).send({ message: 'Server error' });
        if (err) return res.json({ error: err });
        //response frontend
        res.json({
            message: 'Role created successfully',
            role
        });
    });
}

exports.getRoles = (req, res, next) => {
    Roles.get({}, (err, roles) => {
        if (err) return res.json({ error: err });
        res.json({ Roles: roles });
    });
}

exports.getRole = (req, res, next) => {
    Roles.get({ _id: req.params.id }, (err, role) => {
        if (err) return res.json({ error: err });
        res.json({ Role: role });
    });
}

exports.updateRole = (req, res, next) => {
    const role = {
        name: req.body.name,
        description: req.body.description
    }
    Roles.update({ _id: req.params.id }, role, (err, role) => {
        if (err) return res.json({ error: err });
        res.json({ message: 'Role updated successfully' });
    });
}

exports.deleteRole = (req, res, next) => {
    Roles.delete({ _id: req.params.id }, (err, role) => {
        if (err) return res.json({ error: err });
        res.json({ message: 'Role deleted successfully' });
    })
}