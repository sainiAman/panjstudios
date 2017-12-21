'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
let User = mongoose.model('User');

// let User = require('../data/users.model');
let userController = function () {};


userController.prototype.addUser = (req, res) => {

  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let password = req.body.password;

  User.create({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }, (err, user) => {
    if (err) {
      console.log(err);
      res
        .status(400)
        .json(err)
    }else{
      console.log('user created ', user);
      res
        .status(200)
        .json(user)
    }
  })
};

userController.prototype.login = (req, res) => {
  console.log('loging in user');
  let email =  req.body.email;
  let password = req.body.password;

  User.findOne({
    username: username
  }.exec((err, user) => {
    if (err) {
      console.log(err);
      res
        .status(400)
        .json(err)
    }else{
      console.log('user found', user);
      res
        .status(200)
        .json(user)
    }
  }))
}


module.exports = new userController();
