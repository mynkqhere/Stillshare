const jwt = require('jsonwebtoken');
async function Auth(req, res, next){
const token = req.cookies.token
console.log(token); // testing purpose only
 try{
if(!token){return res.status(400).json({Message: "Unauthorized."})}
const decoded = jwt.verify(token, process.env.Jwt_Secret);
console.log(decoded)
req.user = decoded.id
console.log("id of the user who made the post", req.user) // for testing purpose only
 next();
}

 catch(error){
    console.log(error);
    res.status(400).json({Message: "Unauthorize."})
 }
}
module.exports = {Auth};

// i need to get the decoded id and make it useable 