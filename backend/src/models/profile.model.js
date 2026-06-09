const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
    Profilepicture:{type: String},
    Bio:{type: String},
    Name: {type: String},
    User:{type: mongoose.Schema.Types.ObjectId, ref: "Users"}
})
const ProfileModel = mongoose.model("profile", profileSchema);
module.exports = ProfileModel;
