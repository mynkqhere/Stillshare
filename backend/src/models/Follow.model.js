const mongoose = require("mongoose")
const FollowSchema = new mongoose.Schema({
follower_id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
following_id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
},)
FollowSchema.index({follower_id: 1, following_id: 1}, {unique: true})

const FollowModel = mongoose.model("Follow", FollowSchema);
module.exports = FollowModel;
