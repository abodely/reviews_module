const Review = require("./sequelize");

Review.sync({ force: true })
.then(() => {

  return Review.create({
    "home_id":2486,
    "user_name":"Clarence Ankunding",
    "user_photo":"https://s3.amazonaws.com/uifaces/faces/twitter/scott_riley/128.jpg",
    "review_text":"Quia voluptatum nesciunt ratione praesentium dolorem excepturi est unde.",
    "accuracy":2,
    "communication":5,
    "cleanliness":2,
    "location":5,
    "check_in":1,
    "value":5,
    "review_date":"2018-12-30T09:06:19.777Z",
  });
  
}).then(() => {


  Review.create({
    "home_id":248677,
    "user_name":"Jacynthe Ankunding",
    "user_photo":"https://s3.amazonaws.com/uifaces/faces/twitter/scott_riley/128.jpg",
    "review_text":"Quia voluptatum nesciunt ratione praesentium dolorem excepturi est unde.",
    "accuracy":2,
    "communication":5,
    "cleanliness":2,
    "location":5,
    "check_in":1,
    "value":5,
    "review_date":"2018-12-30T09:06:19.777Z"
  }).then((review) => {
    console.log(review.user_name);
  })

}).then(() => {
  Review.findAll().then(reviews => {
  console.log("All reviews:", JSON.stringify(reviews));
  })

})