module.exports = {
    type: String
    , set: require('./../../../quarks/quark-toLower')
    , trim: true
    , validate: require('./../../../quarks/quark-validate-string-length-gt3')
    , required: true
};