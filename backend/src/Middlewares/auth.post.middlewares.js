const jwt = require('jsonwebtoken');
async function Auth(req, res, next){
const token = req.cookies.token
console.log(token); // testing purpose only
 try{
if(!token){return res.status(400).json({Message: "Unauthorized."})}
const decoded = jwt.verify(token, process.env.Jwt_Secret);

 next();
}

 catch(error){
    console.log(error);
    res.status(400).json({Message: "Unauthorize."})
 }
}
module.exports = {Auth};
