const express = require('express');
const router = express.Router();

const MODULE_NAME = 'users';

const MODULE_ACTIONS = ['create', 'retrieve', 'update', 'delete', 'findById'];

const ACTIONS = require('./actions')(MODULE_ACTIONS);
const MODEL = require('./model')(ACTIONS);
const _routes = require('./router')(ACTIONS, MODEL);
const ROUTES = router.use('/api/' + MODULE_NAME, _routes);

module.exports = ROUTES;