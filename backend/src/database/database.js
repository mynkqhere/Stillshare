require("dotenv").config();
const pg_package = require("pg");
const {Pool} = pg_package;
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGDB_PORT
})
module.exports = pool
