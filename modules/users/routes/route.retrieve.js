const express = require('express');
const router = express.Router();

const url = '/';
const method = 'get';

const ROUTER = function (action, Model) {
    return router[method](url, (req, res) => {
        Model(req, res);
    });
};

module.exports = ROUTER;
