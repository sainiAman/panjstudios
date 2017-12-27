'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
let jwt = require('jsonwebtoken');
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
    email: email
  }).exec((err, user) => {
    if (err) {
      console.log(err);
      res
        .status(400)
        .json(err)
    }else{
      if (bcrypt.compareSync(password, user.password)) {
        console.log('user found', user);
        let token = jwt.sign({email: email}, 'labhLavoJeLabhHunda', {expiresIn: 3600});
        res
          .status(200)
          .json({
            success: true,
            token: token
          })
      }else{
        console.log('Unauthorized user');
        res
          .status(401)
          .json('unauthorized user')
      }
    }
  })
};

userController.prototype.authenticate = (req, res, next) => {
  let headerExists = req.headers.authorization;
  if (headerExists) {
    let token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'labhLavoJeLabhHunda', (err, decoded) => {
      if (error) {
        console.log(error);
        res
          .status(401)
          .json('unauthorized')
      }else{
        req.user = decoded.email;
        next()
      }
    })
  }else{
    res
      .status(403)
      .json('No token provided')
  }
};



module.exports = new userController();
