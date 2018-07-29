import Sequelize from 'sequelize';
const DB = require('./database').DB;

const instanceMethods = {
    toJSON() {
        const values = Object.assign({}, this.get());

        return values;
    },
};

var OtherModel = DB.define('other', {
    username: { 
        type: Sequelize.STRING, 
        unique: true 
    },
    profession: { type: Sequelize.STRING }
}, {instanceMethods});

module.exports = OtherModel;