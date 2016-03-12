const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const profileSchema = mongoose.model('profile');

const _schema = new Schema({
    name: require('./fields/field-module-name')
    , description: require('./fields/field-module-description')
    , active: {type: Boolean, default: true}
    , created: require('./fields/field-created')
    , updated: require('./fields/field-updated')
});

// Enable Mongoose getter functions
_schema.set('toObject', {getters: true});
_schema.set('toJSON', {getters: true});
_schema.set('versionKey', false);

_schema.pre('update', function () {
    this.update({}, {$set: {updated: new Date()}});
});

_schema.post('remove', function (doc) {
    profileSchema.update({}, {$pull: {'modules': {module: doc._id}}}, (err) => {
        if (err) console.log(err);
    });
});

module.exports = _schema;