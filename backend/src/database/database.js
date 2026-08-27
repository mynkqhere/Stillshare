require("dotenv").config();
const pg_package = require("pg");
const {Pool} = pg_package;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});
module.exports = pool
