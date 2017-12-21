'use strict';

let userController = function () {};

userController.prototype.getTestData = (req, res) => {
  res
    .status(200)
    .json({
      test: 'working'
    })
};

userController.prototype.addUser = (req, res) => {

  console.log(req.body);

};


module.exports = new userController();
