require('./db/db.mysql.js');

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const apiVersion = '/api/v' + 1;

const userModule = require('./modules/users');

const app = express();

app.use(morgan('Date: :date[clf] | Method: :method | URL: :url | Status :status | Response Time: :response-time ms '));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(apiVersion, userModule.routes);

app.listen(3000, () => {
    console.log("Live at Port 3000");
});

module.exports = app;