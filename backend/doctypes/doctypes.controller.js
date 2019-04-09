const Doctypes = require('./doctypes.dao');

exports.createDoctype = (req, res, next) => {
    const doctype = {
        name: req.body.name,
        description: req.body.description
    }

    Doctypes.create(doctype, (err, doctype) => {
        if (err && err.code === 11000) return res.status(409).send({ message: 'Doctype already exists' });
        if (err) return res.status(404).send({ message: 'Server error' });
        if (err) return res.json({ error: err });
        //response frontend
        res.json({
            message: 'Doc Type created successfully',
            doctype
        });
    });
}

exports.getDoctypes = (req, res, next) => {
    Doctypes.get({}, (err, doctypes) => {
        if (err) return res.json({ error: err });
        res.json({ Doctypes: doctypes });
    });
}

exports.getDoctype = (req, res, next) => {
    Doctypes.get({ _id: req.params.id }, (err, doctype) => {
        if (err) return res.json({ error: err });
        res.json({ Doctype: doctype });
    });
}

exports.updateDoctype = (req, res, next) => {
    const doctype = {
        name: req.body.name,
        description: req.body.description
    }
    Doctypes.update({ _id: req.params.id }, doctype, (err, doctype) => {
        if (err) return res.json({ error: err });
        res.json({
            message: 'Role updated successfully',
            doctypeUpdated: doctype
        });
    });
}

exports.deleteDoctype = (req, res, next) => {
    Doctypes.delete({ _id: req.params.id }, (err, doctype) => {
        if (err) return res.json({ error: err });
        res.json({
            message: 'Doc Type deleted successfully',
            doctypeDeleted: doctype
        });
    })
}