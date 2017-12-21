'use strict';

require('./server/data/db');
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const PORT = process.env.PORT || '5000';

const app = express();
// mongoose.connect('localhost:27017/panjstudios');
app.use(cors());


// get our api routes
const api = require('./server/index.route')(app);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api/v1', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', PORT);
const server = http.createServer(app);

server.listen(PORT, function () {
  console.log('Node server is running at ' + PORT);
});

