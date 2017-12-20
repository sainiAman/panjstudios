'use strict';

let userController = function () {};

userController.prototype.getTestData = (req, res) => {
  res
    .status(200)
    .json({
      test: 'working'
    })
};


module.exports = new userController();
