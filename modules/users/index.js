const MODULE_NAME = 'users';

const ACTIONS = ['create', 'retrieve', 'update', 'delete'];
const MODEL = require('./model')(ACTIONS);
const ROUTERS = require('./router')(ACTIONS, MODEL);

const MODULE = {
    name: MODULE_NAME,
    actions: ACTIONS,
    model: MODEL,
    routes: ROUTERS
};

module.exports = MODULE;