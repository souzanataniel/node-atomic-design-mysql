const routesPath = './routes/route';

const ACTION = (Actions) => {
    const ROUTES = [];
    Actions.forEach((action)=> {
        const route = require(routesPath + '.' + action + '.js');
        ROUTES.push(route);
    });
    return ROUTES;
};

module.exports = ACTION;