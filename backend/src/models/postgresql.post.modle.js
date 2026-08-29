const pool = require("../database/database");
async function createpost(posturl, postcaption, postuser){
    const result = await pool.query("INSERT INTO posts (post_url, caption, user_id) VALUES ($1, $2, $3) RETURNING * ",[posturl, postcaption, postuser])
    return result.rows[0]
}

async function getpostbyid(ID){
    const result = await pool.query('SELECT * FROM posts WHERE user_id=$1', [ID])
    return result.rows
}
async function deletepostbyid(ID){
    const result = await pool.query('DELETE FROM posts WHERE post_id=$1',[ID])
    return result.rows[0]
}
async function getposts(){
    const result = await pool.query('SELECT * FROM posts')
    return result.rows
}

module.exports = {createpost, getpostbyid, deletepostbyid, getposts}
