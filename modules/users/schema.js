const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = new Schema({
    login: require('./fields/field-login'),
    senha: require('./fields/field-password'),
    email: require('./fields/field-email'),
    created: require('./fields/field-created'),
    updated: require('./fields/field-updated')
});

_schema.pre('update', function () {
    this.update({}, {$set: {updated: new Date()}});
});

module.exports = _schema;