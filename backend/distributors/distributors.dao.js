const mongoose = require('mongoose');
const distributorSchema = require('./distributors.model');

distributorSchema.statics = {
    create: function(data, cb) {
        const distributor = new this(data);
        distributor.save(cb);
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

const distributorModel = mongoose.model('Distributors', distributorSchema);
module.exports = distributorModel;