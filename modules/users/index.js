const express = require('express');
const router = express.Router();

const MODULE_NAME = 'users';

const MODULE_ACTIONS = ['create', 'retrieve', 'update', 'delete', 'find', 'findById'];

const ACTIONS = require('./actions')(MODULE_ACTIONS);
const MODEL = require('./model')(ACTIONS);
const ROUTES = require('./router')(ACTIONS, MODEL);
const MODULE_ROUTES = router.use('/api/' + MODULE_NAME, ROUTES);

module.exports = {
    name: MODULE_NAME
    , actions: MODULE_ACTIONS
    , model: MODEL
    , routes: MODULE_ROUTES
};