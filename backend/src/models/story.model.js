const mongoose = require("mongoose");
const Storyschema = new mongoose.Schema({
    files: {},
    User: {type: mongoose.Schema.Types.ObjectId, ref: "Users"}
})
const StoryModel = mongoose.model("stories", Storyschema)
module.exports = StoryModel;

// How to store multiple files under one object id 
// what i want? i want that one user can post multiple times (files) which get stored in under one story id
