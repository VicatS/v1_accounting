const Expenses = require('./expenses.controller');
module.exports = (router) => {
    router.post('/expense/add', Expenses.createExpense);
    router.get('/expenses', Expenses.getExpenses);
    router.get('/expense/:id', Expenses.getExpense);
    router.put('/expense/update/:id', Expenses.updateExpense);
    router.delete('/expense/delete/:id', Expenses.deleteExpense);
}