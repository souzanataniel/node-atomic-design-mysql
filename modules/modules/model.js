const mongoose = require('mongoose');
const Schema = require('./schema');

const MODEL_NAME = 'module';
const COLLECTION_NAME = 'modules';
const Model = mongoose.model(MODEL_NAME, Schema, COLLECTION_NAME);
const actionsPath = './actions/action';

const MODEL = (ACTIONS) => {
    const CRUD = {};
    ACTIONS.forEach((action)=> {
        CRUD[action.name] = require(actionsPath + '.' + action.name + '.js')(Model);
    });
    return CRUD;
};

module.exports = MODEL;
