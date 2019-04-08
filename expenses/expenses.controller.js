const Expenses = require('./expenses.dao');


exports.createExpense = (req, res, next) => {
    const expense = {
        name: req.body.name,
        description: req.body.description
    }

    Expenses.create(expense, (err, expense) => {
        if (err && err.code === 11000) return res.status(409).send({ message: 'Expense already exists' });
        if (err) return res.status(404).send({ message: 'Server error' });
        if (err) return res.json({ error: err });
        //response frontend
        res.json({
            message: 'Expense created successfully',
            expenseCreated: expense
        });
    });
}

exports.getExpenses = (req, res, next) => {
    Expenses.get({}, (err, expenses) => {
        if (err) return res.json({ error: err });
        res.json({ Expenses: expenses });
    });
}

exports.getExpense = (req, res, next) => {
    Expenses.get({ _id: req.params.id }, (err, expense) => {
        if (err) return res.json({ error: err });
        res.json({ Expense: expense });
    });
}

exports.updateExpense = (req, res, next) => {
    const expense = {
        name: req.body.name,
        description: req.body.description
    }
    Expenses.update({ _id: req.params.id }, expense, (err, expenseUpdated) => {
        if (err) return res.json({ error: err });
        res.json({
            message: 'Expense updated successfully',
            expenseUpdated: expense
        });
    });
}

exports.deleteExpense = (req, res, next) => {
    Expenses.delete({ _id: req.params.id }, (err, expense) => {
        if (err) return res.json({ error: err });
        res.json({
            message: 'Role deleted successfully',
            delectedExpense: expense
        });
    })
}