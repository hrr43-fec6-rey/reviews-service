# Reviews Module for FEC project

## To initialize repo
* npm install

## options

### to start server
* npm start (runs node server)
npm run start:dev (runs nodemon for watching)

server will run on port 3300
client can browse to lococalhost:3300

### testing
npm run test (runs jest on test cases)

### webkack builds
npm run build 
npm run build:dev (watch mode for development)

### database
npm run seedDB (seeds mongo database with dummy data)
npm run mongo (start the mongodb server)

## API Routes
GET /:restaurantId
GET /sort/:id/:sorting/:list

## MongoDB reviewSchema
{
  restaurantId: Number,
  firstName: String,
  lastName: String,
  city: String,
  numReviews: Number,
  overall: Number,
  food: Number,
  service: Number,
  ambience: Number,
  dineDate: Date,
  noise: Number,
  recommend: Boolean,
  comments: String,
  filterTag: String,
  vip: Boolean,
  color: String,
}

## Folder Structure

### Server
server/index.js (node/express server)

### Client
App.css (styling)
App.jsx (main React component with hooks including GET reviews section)
index.jsx (ReactDOM render component)
Reviews.jsx (React component for displaying reviews)
Toolbar.jsx (React component for filtering toolbar of reviews)

### Public
index.html 
bundle.js (webpack bundle , production or development)

### Spec
(location for testcases)
App.spec.js
seedFunction.spec.js

## Configuration files
.babelrc
.gitignore
babel.config.js
jest.config.json
jest.setup.js
package.json
webpack.config.js


