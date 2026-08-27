require('dotenv').config();
const app = require("./src/app");
const pool = require("./src/database/database");
const Port = process.env.PORT || 3000
async function StartServer(){
    try{
       await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL UNIQUE
        );
            CREATE TABLE IF NOT EXISTS posts(
            post_id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id),
            post_url TEXT,
            caption TEXT
            );
            
            CREATE TABLE IF NOT EXISTS profiles(
            Profile_id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id),
            avatar_url TEXT,
            bio TEXT,
            name TEXT
            );
       `)
       await pool.query('SELECT NOW()')
       console.log("Connected to Database");
       app.listen(Port,()=>{
        console.log(`Server started running on ${Port}`)})

    }catch(error){console.log("Something went wrong:", error)}
}
// calling function to start server
StartServer()

