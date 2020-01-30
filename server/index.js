const express = require('express');

const app = express();
const PORT = 3300;
const Review = require('../database');

app.use(express.static('./public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
});

app.get('/favicon.ico', (req, res) => {
  console.log('FAVICON LOOKUP');
  res.status(200).end();
});

// app.get('/:restaurantId', (req, res) => {
app.get('/:restaurantId', (req, res) => {
  Review.find(req.params)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting data from database ', err);
    });
});
