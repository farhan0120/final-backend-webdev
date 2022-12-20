//Instantiate Database

//Module dependencies 
const Sequelize = require('sequelize');
const {dbName, dbUser, dbPwd} = require('./utils/configDB');

//confirmation messages
console.log('Opening Database Connection')

//This is entry point, we instantiate the Sequelize instance accordingly;

const db = new Sequelize(dbName, dbUser, dbPwd, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
})

// Export our instance of Sequelize, which will be modified with models;m
module.exports = db