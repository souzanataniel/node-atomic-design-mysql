const routesPath = './routes/route';

const ROUTES = (ACTIONS, MODEL) => {
    const ROUTES = [];
    ACTIONS.forEach((action)=> {
        const route = require(routesPath + '.' + action + '.js')(action, MODEL[action]);
        ROUTES.push(route);
    });
    return ROUTES;
};
module.exports = ROUTES;