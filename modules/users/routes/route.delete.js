const express = require('express');
const router = express.Router();

const url = '/';
const method = 'delete';

const ROUTER = function (action, Model) {
    return router[method](url, (req, res) => {
        const query = {};
        Model(req, res, query);
    });
};

module.exports = ROUTER;
