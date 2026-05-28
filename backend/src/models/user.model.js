const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Username: {
        type: String, required: true
    },

    Email: {
        type: String, required: true
    },

    Password: {
        type: String, required: true
    }
})
const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;
