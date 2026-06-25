const FollowModel = require("../models/Follow.model")
async function FollowUser(req, res){
    const ID = req.params.id // profile id 
    console.log("Whom he wanna follow:", ID)
   const Follow = await FollowModel.create({
    follower_id: req.user, // logged in user
    following_id: ID //  profile they clicked to follow 
    })
    res.status(201).json({Message: "Followed"})
}
module.exports = {FollowUser};
