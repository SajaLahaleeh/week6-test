const { Pool } = require("pg");
const url = require("url");
require("env2")("config.env");

let DB_URL = process.env.DB_URL;

if (!DB_URL) throw new Error("Enviroment variable DB_URL must be set");

const params = url.parse(DB_URL);

const connectionString = DB_URL;

if (!connectionString) {
  throw new Error("please set a db_url env varaiable");
}

module.exports = new Pool({
  connectionString,

  ssl: !connectionString.includes("localhost")
});
