const { Review, sequelize } = require("../database/sequelize");


exports.getAll = (req, res) => {
  Review.findAll({
      where: {
          home_id: req.params.abode_id
      }
  })
  .then((reviews) => {
      res.status(200).send(reviews);
  })
  .catch(error => {
      res.status(500).send("Error : ", error)
  })
};

exports.addReview = (req, res) => {
    Review.findOne({ where: req.body.id })
      .then((obj) => {
          if (obj) {
            obj.update(req.body);
            res.status(200).send("Review Updated");
          } else {
            Review.create(req.body);
            res.status(200).send("Review Created");
          }
      })
      .catch(error => {
          res.status(500).send(console.log(error));
      })
}

exports.deleteReview = (req, res) => {
    id = req.params.id;
    Review.destroy({
        where: { id: id }
    })
    .then(response => {
        if (response === 1) {
            console.log("Review Deleted");
        }
        res.sendStatus(200)
    })
    .catch(error => {
        res.status(500).send(console.log(error));
    })
}
