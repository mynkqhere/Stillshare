const {createpost, getpostbyid} = require("../models/postgresql.post.modle");
const  Upload = require("../services/storage.service")

async function Post(req, res){ 
const Buffer = req.file.buffer;
const fileName = req.file.originalname;
const result = await Upload(Buffer, fileName)
const posturl = result.url
const postcaption = req.body.Caption
const postuser = req.user
const post = await createpost(posturl, postcaption, postuser)
res.status(201).json({Message: "Post Created Successfully!", post});
}

async function GetPosts(req, res){ // need work here 
    const posts = await getposts()
    res.status(201).json({Message: "Posts Fetched Successfully!", posts})
}
async function Getpostbyid(req, res){
    try{
    const ID = req.params.id
    console.log(ID)

    const Post = await getpostbyid(ID)
    
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

