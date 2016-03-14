const Sequelize = require('sequelize');
const sequelize = require('./../../db/db.mysql');
const actionsPath = './actions/action';
const MODEL_NAME = 'user';

const Model = sequelize.define(MODEL_NAME, {
    firstName: require('./fields/field-first-name')
    , lastName: require('./fields/field-last-name')
    , active: require('./fields/field-active')
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

//Model.sync({force: true});
Model.sync();

const MODEL = (ACTIONS) => {
    const CRUD = {};
    ACTIONS.forEach((action)=> {
        CRUD[action.name] = require(actionsPath + '.' + action.name + '.js')(Model);
    });
    return CRUD;
};

module.exports = MODEL;
