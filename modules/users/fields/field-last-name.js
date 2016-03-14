const Sequelize = require('sequelize');

module.exports = {
    type: Sequelize.STRING
    , allowNull: false
    , set: function (val) {
        if (val !== '') {
            this.setDataValue('lastName', val);
        }
    }
};