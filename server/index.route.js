const express = require('express');

const userController = require('./controllers/user.controller');

module.exports = function () {
  let api = express.Router();

  api.post('/user/registration', userController.addUser);
  api.post('/user/login', userController.login);

  return api;
};
