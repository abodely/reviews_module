const { Review, sequelize } = require("../database/sequelize");


exports.get = (req, res) => {
  Review.findAll({
      where: {
          home_id: req.params.abode_id
      }
  }).then((reviews) => {
      res.send(reviews);
  })
};

// ${req.params.abode_id}

// exports.get = (req, res) => {
//   sequelize.query(`SELECT * FROM reviews WHERE home_id = ${req.params.abode_id};`)
//   .then((reviews) => {
//     res.send(reviews);
//   })
// };

exports.addReview = (req, res) => {
    res.send("POST recieved");
    // Review.create(req)
    // res.end()
}