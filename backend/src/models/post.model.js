const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    Post: {type: String},
    Caption: {type: String},
    User: {type: mongoose.Schema.Types.ObjectId, ref: "Users"}
})
const PostModel = mongoose.model("Post", postSchema)
module.exports = PostModel;
