import Sequelize from 'sequelize';
const config = require("../../config")

const DB_DIALECT = config.db.dialect;
const DB_USER = config.db.user;
const DB_NAME = config.db.name;
const DB_PASS = config.db.pass;
const DB_HOST = config.db.host;

// init the DB connection
const DB = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    operatorsAliases: false,
});

module.exports = {DB};