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

// exports.getRoles = (req, res, next) => {
//     Roles.get({}, (err, roles) => {
//         if (err) return res.json({ error: err });
//         res.json({ Roles: roles });
//     });
// }

// exports.getRole = (req, res, next) => {
//     Roles.get({ _id: req.params.id }, (err, role) => {
//         if (err) return res.json({ error: err });
//         res.json({ Role: role });
//     });
// }

// exports.updateRole = (req, res, next) => {
//     const role = {
//         name: req.body.name,
//         description: req.body.description
//     }
//     Roles.update({ _id: req.params.id }, role, (err, role) => {
//         if (err) return res.json({ error: err });
//         res.json({ message: 'Role updated successfully' });
//     });
// }

// exports.deleteRole = (req, res, next) => {
//     Roles.delete({ _id: req.params.id }, (err, role) => {
//         if (err) return res.json({ error: err });
//         res.json({ message: 'Role deleted successfully' });
//     })
// }