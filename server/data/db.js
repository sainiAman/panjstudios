const mongoose = require('mongoose');

let dbUrl = 'mongodb://localhost:27017/panjstudios';

mongoose.connect(dbUrl);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to  ' + dbUrl);
});


// mongoose connection errors management
