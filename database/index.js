// database code
var mongoose = require('mongoose');
var reviewSchema = require('./schema.js');
var mongoUri = 'mongodb://localhost/reviews';
mongoose.Promise = global.Promise;

var db = mongoose.createConnection(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var Review = db.model('Review',reviewSchema);

module.exports = Review;