const express = require('express');

const app = express();
const PORT = 3300;
const Review = require('../database');

app.use(express.static('./public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
});

// app.get('/favicon.ico', (req, res) => {
//   console.log('FAVICON LOOKUP');
//   res.status(200).end();
// });

app.get('/:restaurantId/', (req, res) => {
  Review.find(req.params).sort('-dineDate')
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting data from database ', err);
    });
});

// app.get('/sort/:id/:sorting/', (req, res) => {
//   const sortField = (req.params.sorting === 'Highest') ? '-overall' : 'overall';
//   Review.find({restaurantId: req.params.id}).sort(sortField).sort('-dineDate')
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       console.log('error getting data from database ', err);
//     });
// });

app.get('/sort/:id/:sorting/:list/', (req, res) => {
  const list = JSON.parse(req.params.list);
  let sortField = (req.params.sorting === 'Highest') ? '-overall' : 'overall';
  if (req.params.sorting === 'Newest' || req.params.sorting === 0) {
    sortField = '-dineDate';
  }
  if (!list.length && sortField !== '-dineDate') {
    Review.find({ restaurantId: req.params.id }).sort(sortField).sort('-dineDate')
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log('error getting data from database ', err);
      });
  } else {
    Review.find({restaurantId: req.params.id, filterTag: { $in: list } }).sort(sortField).sort('-dineDate')
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log('error getting data from database ', err);
      });
  }
});

// db.reviews.find({restaurantId: 1, filterTag: {$in: ['Appetizers','Kid friendly']}})
// app.get('/filter/:id/:list/', (req, res) => {
//   const list = JSON.parse(req.params.list);
//   console.log('FILTER LIST ', req.params.list);
//   console.log('type ', typeof(req.params.list));
//   console.log('new list ', Array.isArray(list));
//   Review.find({restaurantId: req.params.id, filterTag: { $in: list } }).sort('-dineDate')
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       console.log('error getting data from database ', err);
//     });
// });
