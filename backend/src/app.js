const cors = require('cors');
const cookieparser = require('cookie-parser');
const profileRoute = require('./routes/profile.route');
const postRoute = require("./routes/post.routes");
const authRoute = require('./routes/auth.route');
const express = require('express');
const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());
app.use(cookieparser());
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use('/api/profile', profileRoute);


module.exports = app;
