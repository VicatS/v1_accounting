const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: Schema.ObjectId,
        ref: 'Roles',
        default: '5caa8f8300b07e018c266866'
    },
    status: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
});

module.exports = userSchema;