var express = require('express');
var router = express.Router();
var userController = require('../controller/user');
var userValidate = require('../validation/user')
var checkAuth = require('../middleware/checkAuth');

router.post('/register', userValidate.register, userController.register);

router.post('/login', userValidate.login, userController.login);

// router.post('/updateProfile', empValidate.Profile, checkAuth.checkAuth, userController.updateProfile);

// router.post('/viewProfile', empValidate.Profile, checkAuth.checkAuth, userController.viewProfile);





module.exports = router;
