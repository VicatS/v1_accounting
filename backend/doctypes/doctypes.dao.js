const mongoose = require('mongoose');
const doctypesSchema = require('./doctypes.model');

doctypesSchema.statics = {
    create: function(data, cb) {
        const doctype = new this(data);
        doctype.save(cb);
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

const doctypesModel = mongoose.model('Doctypes', doctypesSchema);
module.exports = doctypesModel;