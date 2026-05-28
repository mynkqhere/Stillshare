const authRoute = require('./routes/auth.route');
const express = require('express');
const app = express();
app.use(express());
app.use("/api/auth", authRoute);

module.exports = app;
