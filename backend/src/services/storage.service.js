const PostController = require('../controllers/post.controller');
const ImageKit = require('@imagekit/nodejs');
const ImageKitClient = new ImageKit({
     privateKey: process.env.ImageKit_Key
})
async function Upload(Buffer, fileName){
    const response = await ImageKitClient.files.upload({
        file: Buffer.toString("base64"),
        fileName: fileName
    })
    return response;
}
module.exports = Upload;

