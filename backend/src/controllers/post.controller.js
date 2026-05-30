const Upload = require('../services/storage.service');
const PostModel = require('../models/post.model');
async function Post(req, res){
console.log(req.body); // for testing purpose
console.log(req.file); // for testing purpose 
console.log(req.file.buffer); // for testing purpose 
console.log(req.file.originalname) // for testing purpose
// storing them inside variables
const Buffer = req.file.buffer;
const fileName = req.file.originalname;
const result = await Upload(Buffer, fileName)
console.log(result) // for testing purpose
const post = await PostModel.create({
    Post: result.url,
    Caption: req.body.Caption
})
res.status(201).json({Message: "Post Created Successfully!", post});

}
module.exports = {Post};

