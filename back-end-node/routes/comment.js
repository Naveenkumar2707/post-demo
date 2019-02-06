var express = require('express');
var router = express.Router();
var commentController = require('../controller/comment-controller');
var commentValidate = require('../validation/comment-validation')
var checkAuth = require('../middleware/checkAuth');


router.post('/createcomment', commentValidate.checkCreateComment ,checkAuth.checkAuth, commentController.createComment);

router.post('/getpostdetail',commentValidate.checkpostid ,checkAuth.checkAuth, commentController.getAllCommentsOfPost);



module.exports = router;