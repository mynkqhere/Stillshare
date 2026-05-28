const app = require('./src/app');
const port = 3000;
app.listen(port,()=>{
    console.log(`Server is successfully running at ${port}`);
})
