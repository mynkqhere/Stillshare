const pool = require('../database/database')
async function findbyusername(username){
  // running sql query to check if username exists in database
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username])
    return result.rows[0]
}
async function findbyemail(email){
    // running sql query to check if email exists in database 
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    return result.rows[0]
}
async function createuser(username, email, hashedpassword){
    // running sql query to create new user in database
    const result = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING * ', [username, email, hashedpassword] )
    return result.rows[0]
}
async function changeusername(Id, newusername){
    // running sql query to change username 
    const result = await pool.query('UPDATE users SET username=$2 WHERE id=$1', [Id, newusername])
    return result.rows[0] 
}

async function changeemail(ID, newemail){
const result = await pool.query('UPDATE users SET email=$2 WHERE id=$1',[ID, newemail] )
return result.rows[0]
}

async function changepassword(ID, updatedpassword){
    const result = await pool.query('UPDATE users SET password=$2 WHERE id=$1',[ID, updatedpassword])
    return result.rows[0]
}

module.exports = {findbyusername, findbyemail, createuser, changeusername, changeemail, changepassword}
