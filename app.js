require('./db/db.mongodb.js');

const express = require('express');
const app = express();

const userModule = require('./modules/users');

app.use(userModule);

app.listen(3000, () => {
    console.log("Live at Port 3000");
});

module.exports = app;
