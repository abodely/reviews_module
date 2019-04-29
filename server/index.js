require('newrelic');
const express = require('express');
const path = require('path');
// const compression = require('compression');
// const controller = require("./controllers");
const { Review, sequelize } = require("../database/sequelize");

const app = express();
const port = process.env.PORT || 3002;

// app.use(compression());
app.use(express.static('public'));

app.get('/abodes/:abode_id/reviews', (req, res) => {
    Review.findAll({
        where: {
            home_id: req.params.abode_id
        }
    }).then((reviews) => {
        res.send(reviews);
    })
    // sequelize.query("SELECT * FROM reviews WHERE id = " + req.params.abode_id)
    // .then(reviews => res.send(reviews))
});

// app.post('/abodes/:abode_id/reviews', controller.addReview);


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.listen(port, () => { console.log(`Listening on port ${port}`); });
