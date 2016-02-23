require('./db/db.mongodb.js');

const express = require('express');
var app = express();

const userModule = require('./modules/users');

app.use(userModule.routes);

app.listen(3000, () => {
    console.log("Live at Port 3000");
});

module.exports = app;
