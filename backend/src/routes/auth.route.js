const authMiddleware = require('../Middlewares/auth.post.middlewares')
const authController = require("../controllers/auth.controller");
const express = require('express');
const router = express.Router();
router.post('/register', authController.Register);
router.post('/login', authController.Login);
router.post("/logout", authController.Logout);
router.post("/change-username/:id",authMiddleware.Auth, authController.Changeusername)
module.exports = router;