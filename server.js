// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse html from POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
