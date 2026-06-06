const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const UserModel = require("../models/user.model");
async function Register(req, res){
    console.log("Request Recieved", req.body) // testing purpose
    const username = req.body.username; 
    const email = req.body.email;
    const password = req.body.password;
    console.log(username, email, password) // testing purpose
    const isusernametaken = await UserModel.findOne({Username: username})
    if(isusernametaken){return res.status(401).json({Message: "Username is taken"})}
    const isemailtaken = await UserModel.findOne({Email: email})
    if(isemailtaken){return res.status(401).json({Message: "Email taken,"})}
    
    const hashedpassword = await bcrypt.hash(password, 10);
    const registeruser = await UserModel.create({
        Username: username,
        Email: email,
        Password: hashedpassword,

     })

    
        const token = jwt.sign({id: registeruser._id,}, process.env.Jwt_Secret);
    
    res.cookie("token", token,{
        sameSite: "none",
        secure: true,
        httpOnly: true
    })
    res.status(201).json({Message: "User registerd!"})



}

async function Login(req, res){
const username = req.body.username
const password = req.body.password;
const email = req.body.email;

const isuserexists = await UserModel.findOne({
    $or:[{Username: username},{Email: email}]
})
if(!isuserexists){return res.status(401).json({Message: " user is not registerd."})};
const verify = await bcrypt.compare(password, isuserexists.Password)
if(!verify){return res.status(401).json({Message: "Invalid Credentials"})};
const token = jwt.sign({id: isuserexists._id}, process.env.Jwt_Secret);
res.cookie("token", token,{
    sameSite: "none",
    secure: true,
    httpOnly: true
})
res.status(201).json({Message: "User Login successfully!"})



}

async function Logout(req, res){
res.clearCookie("token");
res.status(201).json({Message: "User Logged out."})
}
module.exports = {Register, Login, Logout};