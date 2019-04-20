const Sequelize = require("sequelize");

var sequelize = new Sequelize('database', 'brad', 'OkayCool123', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });