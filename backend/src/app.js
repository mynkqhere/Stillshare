const cookieparser = require('cookie-parser');
const authRoute = require('./routes/auth.route');
const express = require('express');
const app = express();
app.use(express.json())
app.use(cookieparser())
app.use("/api/auth", authRoute);


module.exports = app;
