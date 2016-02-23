const mongoose = require('mongoose');
const Schema = require('./schema');

const MODEL_NAME = 'user';
const COLLECTION_NAME = 'users';
const Model = mongoose.model(MODEL_NAME, Schema, COLLECTION_NAME);

const MODEL = (ACTIONS) => {
    const CRUD = {};
    ACTIONS.forEach((action)=> {
        CRUD[action] = require('./actions/action.' + action + '.js')(Model);
    });
    return CRUD;
};

module.exports = MODEL;
