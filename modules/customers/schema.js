const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deepPopulate = require('mongoose-deep-populate')(mongoose);

const _schema = new Schema({
    name: require('./fields/field-name')
    , users: [{type: Schema.Types.ObjectId, ref: 'user'}]
    , customers: [{type: Schema.Types.ObjectId, ref: 'customer'}]
    , owner: require('./fields/field-owner')
    , created: require('./fields/field-created')
    , updated: require('./fields/field-updated')
});

_schema.plugin(deepPopulate);

// Enable Mongoose getter functions
_schema.set('toObject', {getters: true});
_schema.set('toJSON', {getters: true});
_schema.set('versionKey', false);

_schema.pre('update', function () {
    this.update({}, {$set: {updated: new Date()}});
});

module.exports = _schema;