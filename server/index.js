// require('newrelic');
const express = require('express');
const path = require('path');
const controllers = require("./controllers");


const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.use(express.static('public'));

app.get('/abodes/:abode_id/reviews', controllers.getAll);

app.post('/abodes', controllers.addReview);

app.put("/abodes", controllers.addReview);

app.delete("/abodes/:id/reviews", controllers.deleteReview);


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.listen(port, () => { console.log(`Listening on port ${port}`); });
