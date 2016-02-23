module.exports = {
    type: String
    , set: require('./../../../quarks/quark-toLower')
    , trim: true
    , validate: require('../../../quarks/quark-validate-email')
    , required: true
    , unique: true
    , index: true
};