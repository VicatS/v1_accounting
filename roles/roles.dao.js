const mongoose = require('mongoose');
const roleSchema = require('./roles.model');

roleSchema.statics = {
    create: function(data, cb) {
        const role = new this(data);
        role.save(cb);
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

const roleModel = mongoose.model('Roles', roleSchema);
module.exports = roleModel;