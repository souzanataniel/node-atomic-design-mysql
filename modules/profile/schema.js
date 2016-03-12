const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = mongoose.model('user');

const _schema = new Schema({
    name: require('./fields/field-profile-name')
    , modules: [{
        module: {type: Schema.Types.ObjectId, ref: 'module'}
        , access: require('./fields/field-profile-boolean')
        , readOnly: require('./fields/field-profile-boolean')
    }]
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
    userSchema.update({profile: doc._id}, {$set: {profile: null}}, (err) => {
        if (err) console.log(err);
    });
});

module.exports = _schema;