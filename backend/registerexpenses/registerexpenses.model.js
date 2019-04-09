const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const registerexpensesSchema = new Schema({
    doctype: {
        type: Schema.ObjectId,
        ref: 'Doctypes'
    },
    nrodoc: {
        type: Number,
        required: true
    },
    distributor: {
        type: Schema.ObjectId,
        ref: 'Distributors'
            //required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'Users'
    },
    expense: {
        type: Schema.ObjectId,
        ref: 'Expenses'
    },
    amount: {
        type: Number,
        required: true,
        trim: true
    },
    detail: {
        type: String,
        required: true
    },
    destiny: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = registerexpensesSchema;