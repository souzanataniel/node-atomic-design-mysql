require('./db/db.mongodb.js');

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const apiVersion = '/api/v' + 1;

const userModule = require('./modules/users');
const profileModule = require('./modules/profile');
const modulesModule = require('./modules/modules');
const customerModule = require('./modules/customers');

const app = express();

app.use(morgan('Date: :date[clf] | Method: :method | URL: :url | Status :status | Response Time: :response-time ms '));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(apiVersion, userModule.routes);
app.use(apiVersion, profileModule.routes);
app.use(apiVersion, modulesModule.routes);
app.use(apiVersion, customerModule.routes);

app.listen(3000, () => {
    console.log("Live at Port 3000");
});

module.exports = app;

//TODO #01 - Create pattern for API [Error Handler and Success].
//TODO #02 - Create Tests for Base Module.
//TODO #03 - Validate HTTP Method GET for Retrieve between Url Params

const a = {
    links: {
        self: 'http://localhost:3000/api/users'
    },
    data: [{
        id: '56d0a70ab3ad1ad015c7f925'
        , type: 'users'
        , attributes: {}
        , links: {
            self: 'http://localhost:3000/api/users/56d0a70ab3ad1ad015c7f925'
        }
    }]
};

const error = {
    errors: [{
        status: "422",
        source: {"pointer": "/data/attributes/first-name"},
        title: "Invalid Attribute",
        detail: "First name must contain at least three characters."
    }]
};