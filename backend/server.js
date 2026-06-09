require('dotenv').config();
const app = require("./src/app");
const connect_db = require('./src/database/database');
connect_db();
const port =  process.env.PORT || 3003;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

