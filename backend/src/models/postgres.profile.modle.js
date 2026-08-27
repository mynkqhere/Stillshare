const pool = require("../database/database");
async function createprofile(profilepicture, Bio, Name, User){
    const result = await pool.query('INSERT INTO profiles (user_id, avatar, bio, name) VALUES ($1, $2, $3, $4)',[User, profilepicture, Bio, Name])
    return result.rows[0]
}
async function changeavatar(newavatar, ID){
    const result = pool.query('UPDATE profiles SET avatar=$1 WHERE user_id=$2',[newavatar, ID])
    return result.rows[0]
}
async function changename(ID, Namevalue){
    const result = pool.query('UPDATE profiles SET name=$1 WHERE user_id=$2',[Namevalue, ID])
    return result.rows[0]
}
async function changebio(ID, Bio){
    const result = await pool.query('UPDATE profiles SET bio=$2 WHERE user_id=$1', [ID, Bio])
    return result.rows[0]
}
module.exports = {createprofile, changeavatar, changename, changebio}

