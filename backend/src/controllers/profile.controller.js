const Upload = require('../services/storage.service');
const ProfileModel = require('../models/profile.model');
async function CreateProfile(req, res){
    const Buffer = req.file.buffer;
    const fileName = req.file.originalname
    const result = await Upload(Buffer, fileName) 
    const profile = await ProfileModel.create({
     Profilepicture: result.url,
     Bio: req.body.Bio,
     Name: req.body.Name,
     User: req.user
})
res.status(201).json({Message: "Profile Created successfully", profile})
}
async function GetProfile(req, res){
const ID = req.params.id
console.log(ID)
const user = await ProfileModel.findById(ID).populate("User")
res.status(201).json({Message: "User Fetched Successfully", user})
}


module.exports = {CreateProfile, GetProfile,};