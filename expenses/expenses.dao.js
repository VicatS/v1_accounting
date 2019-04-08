const mongoose = require('mongoose');
const expenseSchema = require('./expenses.model');

expenseSchema.statics = {
    create: function(data, cb) {
        const expense = new this(data);
        expense.save(cb);
    },
    get: function(query, cb) {
        this.find(query, cb);
    },
    getById: function(query, cb) {
        this.findById(query, cb);
    },
    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
    },
    delete: function(query, cb) {
        this.findOneAndDelete(query, cb);
    }
}

const expenseModel = mongoose.model('Expenses', expenseSchema);
module.exports = expenseModel;