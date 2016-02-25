require('./db/db.mongodb.js');

const express = require('express');
const bodyParser = require('body-parser');
const userModule = require('./modules/users');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(userModule);

app.listen(3000, () => {
    console.log("Live at Port 3000");
});

module.exports = app;
