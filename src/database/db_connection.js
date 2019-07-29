require("env2")("config.env");
const { Pool } = require("pg");
const url = require("url");
let DB_URL = process.env.DB_URL;
if (!DB_URL) throw new Error("Envirooment variable DB_URL must be set");
const param = url.parse(DB_URL);
const connectionString = DB_URL;
if (!connectionString) {
  throw new Error("please set a db_url env variable");
}

module.exports = new Pool({
  connectionString,
  ssl: !connectionString.includes("localhost")
});
