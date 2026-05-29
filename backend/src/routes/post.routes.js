const postController = require('../controllers/post.controller');
const express = require("express");
const router = express.Router();
router.post('/create-post', postController.Post);
module.exports = router;