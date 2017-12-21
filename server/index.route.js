const express = require('express');

const userController = require('./controllers/user.controller');

module.exports = function () {
  let api = express.Router();

  api.post('/registration', userController.addUser);

  return api;
};
