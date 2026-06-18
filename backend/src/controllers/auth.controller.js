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
        // httpOnly: true,
        // secure: true,
        // sameSite: "None",
        // maxAge:  7 * 24 * 60 * 60 * 1000 
        
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
// httpOnly: true,
// secure: true,
// sameSite: "None",
// maxAge:  7 * 24 * 60 * 60 * 1000 
   
})
res.status(201).json({Message: "User Login successfully!", Userid: `${isuserexists._id}`
  
 })



}

async function Logout(req, res){
res.clearCookie("token",{
    // httpOnly: true,
    // secure: true,
    // sameSite: "None"
});
res.status(201).json({Message: "User Logged out."})
}
async function Changeusername(req, res){
const ID = req.params.id 
console.log(ID)
const username = req.body.username
console.log(username)
const isusernameexists = await UserModel.findOne({Username: username})
if (isusernameexists){return res.status(401).json({Message: "Username is taken please select another"})}

const updateusername = await UserModel.findByIdAndUpdate(ID,{
    Username: username
})

res.status(201).json({Message: "Updated Username"})
}
async function Changeemail(req, res){
    const ID = req.params.id
    const email = req.body.email
    const updateemail = await UserModel.findByIdAndUpdate(ID,{
        Email: email
    })
    res.status(201).json({Message: "Email Updated",})
}
async function Changepassword(req, res){
const ID = req.params.id
const password = req.body.password
const updatedpassword = await bcrypt.hash(password, 10)
const updatepassword = await UserModel.findByIdAndUpdate(ID,{
    Password: updatedpassword
})
res.status(201).json({Message: "Updated password"})
}

module.exports = {Register, Login, Logout, Changeusername, Changeemail, Changepassword};
