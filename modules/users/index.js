const MODULE_NAME = 'users';

const ACTIONS = ['create', 'retrieve', 'update', 'delete'];
const MODEL = require('./model')(ACTIONS);

const MODULE = {
    name: MODULE_NAME,
    actions: ACTIONS,
    model: MODEL
};

module.exports = MODULE;