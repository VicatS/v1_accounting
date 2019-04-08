const Distributors = require('./distributors.dao');


exports.createDistributor = (req, res, next) => {
    const distributor = {
        contact: req.body.contact,
        mobile: req.body.mobile
    }

    Distributors.create(distributor, (err, distributor) => {
        if (err && err.code === 11000) return res.status(409).send({ message: 'Distributor already exists' });
        if (err) return res.status(404).send({ message: 'Server error' });
        if (err) return res.json({ error: err });
        //response frontend
        res.json({
            message: 'Distributor created successfully',
            Distributor: distributor
        });
    });
}

exports.getDistributors = (req, res, next) => {
    Distributors.get({}, (err, distributors) => {
        if (err) return res.json({ error: err });
        res.json({ Distributors: distributors });
    });
}

exports.getDistributor = (req, res, next) => {
    Distributors.get({ _id: req.params.id }, (err, distributor) => {
        if (err) return res.json({ error: err });
        res.json({ Distributor: distributor });
    });
}

exports.updateDistributor = (req, res, next) => {
    const distributor = {
        contact: req.body.contact,
        mobile: req.body.mobile
    }
    Distributors.update({ _id: req.params.id }, distributor, (err, distributor) => {
        if (err) return res.json({ error: err });
        res.json({
            message: 'Distributor updated successfully',
            distributorUpdated: distributor
        });
    });
}

exports.deleteDistributor = (req, res, next) => {
    Distributors.delete({ _id: req.params.id }, (err, distributor) => {
        if (err) return res.json({ error: err });
        res.json({
            message: 'Distributor deleted successfully',
            distributorDeleted: distributor
        });
    })
}