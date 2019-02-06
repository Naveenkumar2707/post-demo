var express = require('express');
var router = express.Router();
var postController = require('../controller/post-controller');
var postValidate = require('../validation/post-validation')
var checkAuth = require('../middleware/checkAuth');


router.post('/createpost', postValidate.checkCreatePost ,checkAuth.checkAuth, postController.createPost);

// router.post('/getpostdetail', postValidate.checkPostId ,checkAuth.checkAuth, postController.getPostDeatil);

router.get('/getallpost',checkAuth.checkAuth, postController.getAllPost);


module.exports = router;