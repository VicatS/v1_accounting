const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const distributorSchema = new Schema({
    contact: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = distributorSchema;