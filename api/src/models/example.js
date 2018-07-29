import Sequelize from 'sequelize';
const DB = require('./database').DB;

const instanceMethods = {
    toJSON() {
        const values = Object.assign({}, this.get());
        return values;
    },
};

const ExampleModel = DB.define('example', {
    username: { type: Sequelize.STRING, unique: true },
    passwordHash: { type: Sequelize.TEXT },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
}, {instanceMethods})

module.exports = ExampleModel;