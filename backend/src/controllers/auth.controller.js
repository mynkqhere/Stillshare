const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const authRoute = require("../routes/auth.route")
const UserModel = require("../models/user.model");
async function Register(req, res){
    console.log("Request Recieved", req.body) // testing purpose
    const username = req.body.username; 
    const email = req.body.email;
    const password = req.body.password;
    console.log(username, email, password) // testing purpose

    const isuserexists = await UserModel.findOne({
        $or:[{Username: username},{Email: email}]
    })

    if(isuserexists){return res.status(401).json({Message: "User already exist."})}
    const hashedpassword = await bcrypt.hash(password, 10);
    const registeruser = await UserModel.create({
        Username: username,
        Email: email,
        Password: hashedpassword,

     })

    
        const token = jwt.sign({id: registeruser._id,}, process.env.Jwt_Secret);
    
    res.cookie("token", token);
    res.status(201).json({Message: "User registerd!"})



}
module.exports = {Register};