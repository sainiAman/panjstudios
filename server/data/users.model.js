let mongoose = require('mongoose');
let validate = require('mongoose-validator');


let nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 25],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Name should contain alpha-numeric characters only'
  })
];


let userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    validate: nameValidator
  },
  lastname: {
    type: String,
    required: true,
    validate: nameValidator
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

mongoose.model('User', userSchema);
// module.exports = mongoose.model('User', userSchema);
