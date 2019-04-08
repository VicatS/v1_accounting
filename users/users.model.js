const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'Cajero'
    },
    status: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
});

module.exports = userSchema;