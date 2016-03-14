const express = require('express');
const router = express.Router();

const routesPath = './routes/route';

const ROUTES = (ACTIONS, MODEL) => {
    const ROUTES = [];
    ACTIONS.forEach((action)=> {
        const route = router[action.method](action.url, (req, res) => {
            MODEL[action.name](req, res);
        });
        ROUTES.push(route);
    });
    return ROUTES;
};
module.exports = ROUTES;