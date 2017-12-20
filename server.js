'use strict';

const express = require('express');
const http = require('http');
const PORT = process.env.PORT || '3000';

const app = express();


// get our api routes
const api = require('./server/index.route')(app);




// Set our api routes
app.use('/api/v1', api);

app.set('port', PORT);
const server = http.createServer(app);

server.listen(PORT, function () {
  console.log('Node server is running at ' + PORT);
});

