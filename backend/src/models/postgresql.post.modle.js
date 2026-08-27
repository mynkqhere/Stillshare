const pool = require("../database/database");
async function createpost(posturl, postcaption, postuser){
    const result = await pool.query("INSERT INTO posts (post_url, caption, user_id) VALUES ($1, $2, $3) RETURNING * ",[posturl, postcaption, postuser])
    return result.rows[0]
}
module.exports = {createpost}