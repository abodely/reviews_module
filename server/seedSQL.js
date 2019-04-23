const { Review, sequelize } = require("./sequelize");
const fs = require('fs');

Review.sync({ force: true })
.then(() => {
  sequelize
    .query(
    `LOAD DATA LOCAL INFILE "/home/bradley/Desktop/Hackreactor/reviews_module/sample.csv"
    INTO TABLE reviews
    FIELDS TERMINATED BY '|'
    ENCLOSED BY '"'
    LINES TERMINATED BY '\r\n'
    IGNORE 1 LINES
    (home_id, user_name, user_photo, review_text, accuracy, communication, cleanliness, location, check_in, value, review_date);`
  )
})
// .then(() => {
//   Review.findAll().then(reviews => {
//   console.log("All reviews: ", JSON.stringify(reviews));
//   })
// })

