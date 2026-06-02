const cors = require('cors');
const cookieparser = require('cookie-parser');
const postRoute = require("./routes/post.routes");
const authRoute = require('./routes/auth.route');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieparser());
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);


module.exports = app;
