require('./db/db.mongodb.js');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const userModule = require('./modules/users');

const app = express();

app.use(morgan('Date: :date[clf] | Method: :method | URL: :url | Status :status | Response Time: :response-time ms '));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(userModule.routes);

app.listen(3000, () => {
    console.log("Live at Port 3000");
});

module.exports = app;

//TODO #01 - Create pattern for API [Error Handler and Success].
//TODO #02 - Create Tests for Base Module.
//TODO #03 - Validate HTTP Method GET for Retrieve between Url Params