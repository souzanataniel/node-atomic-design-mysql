module.exports = {
    type: String
    , get: require('./../../../quarks/quark-toUpper')
    , set: require('./../../../quarks/quark-toLower')
    , validate: require('./../../../quarks/quark-validate-string-length-gt3')
    , required: true
};