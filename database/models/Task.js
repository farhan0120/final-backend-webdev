const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {
    description: {
        type: Sequelize.STRING,
        allowNull: false
      },
    
      prioritylevel: {
        type: Sequelize.INTEGER
      },
    
      completionstatus: {
        type: Sequelize.BOOLEAN
      },
    
      // isOpen: {
      //   type: Sequelize.BOOLEAN,
      //   allowNull: false,
      //   defaultValue: true
      // }
    
    });
    
    module.exports = Task;
