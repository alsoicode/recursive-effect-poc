require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ip = require('ip');
const app = express();

// endpoint functions
const results = require('./results');

app.use(cors({
  origin: '*',
  methods: 'POST, GET, PUT, DELETE, OPTIONS, AUTHORIZATION, requested-references',
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

const port = process.env.PORT || 3000
let host = '0.0.0.0';

if (process.env.BIND_TO_HOST === 'true') {
  host = ip.address();
}

app.get('/results/data-loaded', results.dataLoaded);

app.listen(port, host, function () {
  console.log(`POC Mock API listening at http://${ host }:${ port }`);
});
