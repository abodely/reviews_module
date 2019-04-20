const sequelize = require("sequelize");

var sequelize = new Sequelize('database', 'brad', 'OkayCool123', {
  host: 'localhost',
  dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
  
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  
});