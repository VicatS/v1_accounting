const mongoose = require('mongoose');
const registerexpensesSchema = require('./registerexpenses.model');

registerexpensesSchema.statics = {
    create: function(data, cb) {
        const registerexpenses = new this(data);
        registerexpenses.save(cb);
    },
    get: function(query, cb) {
            this.find(query, cb);
        }
        // getById: function (query, cb) {
        //     this.find(query, cb);
        // },
        // update: function (query, updateData, cb) {
        //     this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
        // },
        // delete: function (query, cb) {
        //     this.findOneAndDelete(query, cb);
        // }
}

const registerexpensesModel = mongoose.model('RegisterExpenses', registerexpensesSchema);
module.exports = registerexpensesModel;