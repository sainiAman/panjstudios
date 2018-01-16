const express = require('express');

const userController = require('./controllers/user.controller');

module.exports = function () {
  let api = express.Router();

  api.post('/users/registration', userController.addUser);
  api.post('/users/login', userController.login);
  api.get('/users', userController.authenticate, userController.getAllUsers);
  api.get('/users/:userId', userController.authenticate, userController.getSingleUser);
  api.get('/getUserId', userController.getUserId);

  return api;
};
