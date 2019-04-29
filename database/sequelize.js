const Sequelize = require("sequelize");

var sequelize = new Sequelize('allReviews2', 'brad', 'OkayCool123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  dialectOptions: {
    multipleStatements: true,
  }
});

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


const Model = Sequelize.Model;
class Review extends Model {}
Review.init({
  home_id: { type: Sequelize.INTEGER },
  user_name: { type: Sequelize.STRING },
  user_photo: { type: Sequelize.STRING },
  review_text: { type: Sequelize.STRING },
  accuracy: { type: Sequelize.INTEGER },
  communication: {type: Sequelize.INTEGER},
  cleanliness: { type: Sequelize.INTEGER },
  location: { type: Sequelize.INTEGER },
  check_in: { type: Sequelize.INTEGER },
  value: { type: Sequelize.INTEGER },
  review_date: { type: Sequelize.STRING },
}, {
  sequelize,
  modelName: 'review',
  timestamps: false,
});

module.exports.Review = Review;
module.exports.sequelize = sequelize;
