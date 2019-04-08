const Expenses = require('./expenses.controller');
module.exports = (router) => {
    router.post('/expenses/add', Expenses.createExpense);
}