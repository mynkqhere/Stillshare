require('dotenv').config();
const app = require("./src/app");
const pool = require("./src/database/database");
const Port = process.env.PORT || 3000
async function StartServer(){
    try{
       await pool.query('SELECT NOW()')
       console.log("Connected to Database");
       app.listen(Port,()=>{
        console.log(`Server started running on ${Port}`)})

    }catch(error){console.log("Something went wrong:", error)}
}
// calling function to start server
StartServer()

