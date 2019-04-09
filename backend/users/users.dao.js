const mongoose = require('mongoose');
const userSchema = require('./users.model');

userSchema.statics = {
    create: function(data, cb) {
        const newUser = new this(data);
        newUser.save(cb);
    },
    login: function(query, cb) {
        this.find(query, cb);
    },
    get: function(query, cb) {
        this.find(query, cb);
    },
    getById: function(query, cb) {
        this.find(query, cb);
    },
    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
    },
    delete: function(query, cb) {
        this.findOneAndDelete(query, cb);
    }
}

const usersModel = mongoose.model('Users', userSchema);
module.exports = usersModel;