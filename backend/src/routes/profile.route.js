const Auth = require('../Middlewares/auth.post.middlewares')
const multer = require('multer');
const profileController = require('../controllers/profile.controller');
const express = require('express');
const router = express.Router();
const upload = multer({storage: multer.memoryStorage()});
router.post('/create-profile',Auth.Auth, upload.single("Profilepicture"),profileController.CreateProfile);
router.get('/get-user/:id', profileController.GetProfile)
router.post("/change-profilepicture/:id", Auth.Auth, upload.single("Profilepicture") ,profileController.Changeprofilepicture)
module.exports = router; 
