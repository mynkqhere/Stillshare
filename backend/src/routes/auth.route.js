const authMiddleware = require('../Middlewares/auth.post.middlewares')
const authController = require("../controllers/auth.controller");
const express = require('express');
const router = express.Router();
router.post('/register', authController.Register);
router.post('/login', authController.Login);
router.post("/logout", authController.Logout);
router.post("/change-username/:id",authMiddleware.Auth, authController.Changeusername)
router.post('/change-email/:id', authMiddleware.Auth, authController.Changeemail)
router.post("/change-password/:id", authMiddleware.Auth, authController.Changepassword)
module.exports = router;