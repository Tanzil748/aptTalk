const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: process.env.DBPASS,
  host: "localhost",
  port: "5433",
  database: "aptTalk",
});

module.exports = pool;
