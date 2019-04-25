const MyModel = require("./expressCassandra");
const ExpressCassandra = require('express-cassandra');

var myHouse = new MyModel({
  home_id: 67215,
  user_name: "itsYaBoy",
  user_photo: "importantStuff.jpg",
  review_text: "Yea this place was pretty cool.",
  accuracy: 4,
  communication: 5,
  cleanliness: 5,
  location: 1,
  check_in: 5,
  value: 5,
  review_date: "Yesterday"
});

myHouse.save((err) => {
  if (err) {
      console.log(err);
  } else {
      console.log("It saved ")
  }
});

// var query = `copy "allReviews"."reviews" ("home_id","user_name","user_photo","review_text","accuracy","communication","cleanliness","location","check_in","value","review_date") from '/home/bradley/Desktop/Hackreactor/reviews_module/sample.csv' with delimiter = '|' and header = true;`;
// var params = ['male', 18, 10];
// var query = `select * from reviews;`
// MyModel.execute_query(query, null, (err, reviews) => {
//     // people is an array of plain objects
//     if (err) {
//       console.log(err);
//     }
// });