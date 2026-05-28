const mongoose = require('mongoose');
async function connect_db(){
try{
    await mongoose.connect(process.env.MongoDB_URI);
    console.log("Connected to Database..")
}

catch(error){
    console.log("Unable to connect to Database!")
    console.log(error);
}
}
module.exports = connect_db;