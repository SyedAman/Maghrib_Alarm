// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse html from POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set server to run on port 8000
var port = process.env.PORT || 8000;

// define routes for API
var router = express.Router();
router.get('/', () => {
  res.json({
    message: "creating REST API"
  });
});
