const Registerexpenses = require('./registerexpenses.dao');

exports.createRegisterexpense = (req, res, next) => {
    const registerexpense = {
        doctype: req.body.doctype,
        nrodoc: req.body.nrodoc,
        distributor: req.body.distributor,
        user: req.body.user,
        expense: req.body.expense,
        amount: req.body.amount,
        detail: req.body.detail,
        destiny: req.body.destiny
    }

    Registerexpenses.create(registerexpense, (err, registerexpense) => {
        if (err) return res.status(404).send({ message: 'Server error' });
        if (err) return res.json({ error: err });
        //response frontend
        res.json({
            message: 'Register of Expenses created successfully',
            registerCreated: registerexpense
        });
    });
}

exports.getRegisterexpenses = (req, res, next) => {
    Registerexpenses.get({}, (err, registerexpenses) => {
        if (err) return res.json({ error: err });
        res.json({ Register_Expenses: registerexpenses });
    });
}