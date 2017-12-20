const express = require('express');

const userController = require('./controllers/user.controller');

module.exports = function () {
  let api = express.Router();

  api.get('/test', userController.getTestData);

  return api;
};
