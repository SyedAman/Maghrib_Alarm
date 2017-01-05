// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// use mongoose to interact with database
const mongoose = require('mongoose');

// parse html from POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// connect to MongoDB database
mongoose.connect('mongodb://syednashikaman:snw0DxALj0P*@ds025459.mlab.com:25459/star-wars-quotes');

// set server to run on port 8000
var port = process.env.PORT || 8000;

// define routes for API
var router = express.Router();

router.use((req, res, next) => {
  // log all API requests
  console.log('received request to RESTful API');
  // don't stop at current route
  next();
});

router.get('/', (req, res) => {
  res.json({
    message: "received a GET request"
  });
});

router

// register and prefix routes
app.use('/api', router);

// start and listen to the server
app.listen(port);
console.log('RESTful API servier @ localhost:8000');
