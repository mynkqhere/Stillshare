const  Upload = require("../services/storage.service")
const ProfileModel = require('../models/profile.model');
const PostModel = require('../models/post.model')
async function Post(req, res){
console.log(req.body); // for testing purpose
console.log(req.file); // for testing purpose 
console.log(req.file.buffer); // for testing purpose 
console.log(req.file.originalname) // for testing purpose
console.log("testing caption",req.body.Caption)// for testing purpose 
// storing them inside variables
const Buffer = req.file.buffer;
const fileName = req.file.originalname;
const result = await Upload(Buffer, fileName)
console.log(result) // for testing purpose
const post = await PostModel.create({
    Post: result.url,
    Caption: req.body.Caption,
    User: req.user
})
res.status(201).json({Message: "Post Created Successfully!", post});
}

async function GetPosts(req, res){ // need work here 
    const posts = await PostModel.find().populate("User", "Username Email")
    res.status(201).json({Message: "Posts Fetched Successfully!", posts})
}
async function Getpostbyid(req, res){
    try{
    const ID = req.params.id
    console.log(ID)
    const Post = await PostModel.find({User: ID}).populate("User", "Username")
    if(!Post){return res.status(401).json({Message: "No post found"})}
    console.log(Post)
    res.status(201).json({Message: "Successfuly fetched posts", Post})
    }catch(error){console.error("Failed to fetch post", error)}}

async function Deletepost(req, res){
    try{
    const ID = req.params.id
    console.log(ID)
    const Deletepost = await PostModel.findByIdAndDelete({_id: ID})
    res.status(201).json({Message: "Post deleted successfully"})
}catch(error){console.error("something went wrong while deleting the post", error)}}

module.exports = {Post, GetPosts, Getpostbyid, Deletepost};

