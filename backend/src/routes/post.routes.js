const Multer = require('multer');
const postController = require('../controllers/post.controller');
const express = require("express");
const multer = require('multer');
const router = express.Router();
const upload = multer({Storage: multer.memoryStorage()});
router.post('/create-post', upload.single("Post"), postController.Post);
module.exports = router;