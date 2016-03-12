module.exports = {
    type: String
    , set: require('./../../../quarks/quark-toLower')
    , validate: require('./../../../quarks/quark-validate-string-length-gt3')
    , required: true
};