const DB_CONFIG = require('./db.mysql.config.js');
const Sequelize = require('sequelize');

const db = new Sequelize(DB_CONFIG.database, DB_CONFIG.username, DB_CONFIG.password, {
    host: 'localhost'
    , dialect: 'mysql'

    , pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = db;