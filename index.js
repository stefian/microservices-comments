const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('cryptp');

const app = express();
app.use(bodyParser.json());

