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
app.get('/:restaurantId/', (req, res) => {
  Review.find(req.params).sort('-dineDate')
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting data from database ', err);
    });
});

app.get('/sort/:id/:sorting/', (req, res) => {
  console.log('SORT PARAMS ', req.params);
  const sortField = (req.params.sorting === 'Highest') ? 'overall' : '-overall';
  console.log('SORT FIELD ',sortField);
  Review.find(req.params.id).sort('-overall')
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting data from database ', err);
    });

  // Review.find(req.params).sort('-dineDate')
  //   .then((data) => {
  //     res.status(200).send(data);
  //   })
  //   .catch((err) => {
  //     console.log('error getting data from database ', err);
  //   });
});
