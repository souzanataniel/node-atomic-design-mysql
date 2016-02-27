const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = new Schema({
    login: require('./fields/field-login')
    , password: require('./fields/field-password')
    , email: require('./fields/field-email')
    , created: require('./fields/field-created')
    , updated: require('./fields/field-updated')
});

// Enable Mongoose getter functions
_schema.set('toObject', {getters: true});
_schema.set('toJSON', {getters: true});

_schema.pre('update', function () {
    this.update({}, {$set: {updated: new Date()}});
});

module.exports = _schema;