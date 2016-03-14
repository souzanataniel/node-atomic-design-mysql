const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
    type: Schema.Types.ObjectId
    , ref: 'customer'
    , required: true
};