const {findbyusername, findbyemail, createuser, changeusername} = require("../models/postgresql.user.modle");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const UserModel = require("../models/user.model");


async function Register(req, res){
    const username = req.body.username; 
    const email = req.body.email;
    const password = req.body.password;
    if(!username || username.trim() ===""){return res.status(401).json({Message: "Username is required"})};
    if(!password || password.trim()===""){return res.status(401).json({Message: "Password is required"})};
    if(!email || email.trim()===""){return res.status(401).json({Message: "Email is required"})};
    
    // sql model to check if username exists in database
    const isusernametaken = await findbyusername(username) // passint username to sql model to check if username exists in database
    if(isusernametaken){return res.status(401).json({Message: "Username is taken"})}
    
    // sql model to check if email exists in database
    const isemailtaken = await findbyemail(email)
    if(isemailtaken){return res.status(401).json({Message: "Email taken,"})}
    
    const hashedpassword = await bcrypt.hash(password, 10);
    const registeruser = await createuser(username, email, hashedpassword)
    console.log(registeruser)

    
    const token = jwt.sign({id: registeruser.id,}, process.env.Jwt_Secret);
    
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
if(!username || username.trim()===""){return res.status(401).json({Message: "Username is required"})};
if(!password || password.trim()===""){return res.status(401).json({Message: "Password is required"});
if(!email || email.trim()===""){return res.status(401).json({Message: "Email is required"})}
}

const isuserexists = await findbyusername(username) || await findbyemail(email)
if(!isuserexists){return res.status(401).json({Message: " user is not registerd."})};
const verify = await bcrypt.compare(password, isuserexists.password)
if(!verify){return res.status(401).json({Message: "Invalid Credentials"})};
const token = jwt.sign({id: isuserexists.id}, process.env.Jwt_Secret);
res.cookie("token", token,{
// httpOnly: true,
// secure: true,
// sameSite: "None",
// maxAge:  7 * 24 * 60 * 60 * 1000 
   
})
res.status(201).json({Message: "User Login successfully!", Userid: `${isuserexists.id}`
  
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


// working on this one 


async function Changeusername(req, res){
const ID = req.params.id 
console.log(ID)
const username = req.body.username
if(!username || username.trim()===""){return res.status(401).json({Message: "Username is required"})};

const isusernameexists = await findbyusername(username)
if (isusernameexists){return res.status(401).json({Message: "Username is taken"})}

const updateusername = await changeusername(ID, username)

res.status(201).json({Message: "Updated Username"})
}


async function Changeemail(req, res){
    const ID = req.params.id
    const email = req.body.email
    if(!email || email.trim()===""){return res.status(401).json({Message: "Email is required"})}
    const updateemail = await UserModel.findByIdAndUpdate(ID,{
        Email: email
    })
    res.status(201).json({Message: "Email Updated",})
}


async function Changepassword(req, res){
const ID = req.params.id
const password = req.body.password
if(!password || password.trim()===""){ return res.status(401).json({Message: "Password is required"})}
const updatedpassword = await bcrypt.hash(password, 10)
const updatepassword = await UserModel.findByIdAndUpdate(ID,{
    Password: updatedpassword
})
res.status(201).json({Message: "Updated password"})
}

module.exports = {Register, Login, Logout, Changeusername, Changeemail, Changepassword};