const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController.js');

router.post('/create/:topic_id', commentController.createComment);
router.post('/delete/:comment_id', commentController.deleteComment);    //¥Ò±€ ªË¡¶


module.exports = router;