const FollowAuth = require('../Middlewares/auth.post.middlewares')
const FollowController = require('../controllers/Follow.controller')
const express = require("express");
const router = express.Router()
router.post("/user/:id", FollowAuth.Auth, FollowController.FollowUser);
module.exports = router;