const {createprofile, changeavatar, changename, changebio, getprofilebyid} = require("../models/postgres.profile.modle");
const Upload = require('../services/storage.service');
async function CreateProfile(req, res){
    console.log(req.body)
    const Buffer = req.file.buffer;
    const fileName = req.file.originalname
    const result = await Upload(Buffer, fileName)
    const profilepicture = result.url
    console.log(profilepicture)
    const Bio = req.body.Bio
    console.log(Bio)
    const Name = req.body.Name
    console.log(Name)
    const User = req.user 
    console.log(User)
    const profile = await createprofile(profilepicture, Bio, Name, User)
 res.status(201).json({Message: "Profile Created successfully", profile})

}
async function GetProfile(req, res){
const ID = req.params.id
console.log("id from localstorage:",ID)
const user = await getprofilebyid(ID)
if(!user){return res.status(400).json({Message: "User not found"})}
res.status(201).json({Message: "User Fetched Successfully", user})
}

async function Changeprofilepicture(req, res){
const ID = req.params.id
const Buffer = req.file.buffer
const fileName = req.file.originalname
const result = await Upload(Buffer, fileName)
const newavatar = result.url
console.log(newavatar)
const update = await changeavatar(newavatar, ID)
console.log(update)
res.status(201).json({Message: "Profile Picture Updated Successfully"})
}

async function Changename(req, res){
const ID = req.params.id
const Namevalue = req.body.name
const updatename = await changename(ID, Namevalue)
res.status(201).json({Message: "Name Updated succesfully"})
}
async function Changebio(req, res){
const ID = req.params.id
console.log(ID)
const Bio = req.body.bio
console.log(Bio)
const updatebio = await changebio(ID, Bio)
console.log(updatebio)
res.status(201).json({Message: "Successfully Updated Bio"})
}
async function Searchprofile(req, res){
    const Username = req.params.user
    console.log(Username)
    const profile = await ProfileModel.find({Name: Username}).populate("User")
    res.status(201).json({Message: "Fetched", profile})
}

module.exports = {CreateProfile, GetProfile, Changeprofilepicture, Changename, Changebio, Searchprofile}