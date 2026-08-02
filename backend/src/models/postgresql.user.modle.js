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
module.exports = {findbyusername, findbyemail, createuser}

// we are taking the username, email and password from the controller and passing it to the sql model which will put this values to the column name that we have created in the database we will tell in the query in which column name we want to put these values. we can also cheak in our database the correct name of the column.