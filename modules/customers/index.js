const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const MODULE_NAME = 'customers';

const MODULE_ACTIONS = [
    'create'
    , 'retrieve'
    , 'update'
    , 'delete'
    , 'count'
    , 'findById'
];

const ACTIONS = require('./actions')(MODULE_ACTIONS);
const MODEL = require('./model')(ACTIONS);
const ROUTES = require('./router')(ACTIONS, MODEL);
const MODULE_ROUTES = router.use('/' + MODULE_NAME, ROUTES);

const MODEL_RAW = mongoose.model('customer');

module.exports = {
    name: MODULE_NAME
    , actions: MODULE_ACTIONS
    , model: MODEL_RAW
    , routes: MODULE_ROUTES
};