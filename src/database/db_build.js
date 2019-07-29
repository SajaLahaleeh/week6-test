const fs = require("fs");
const path = require("path");

const dbConnection = require("/db_connection.js");
const sql = fs.readFileSync(`${__dirname}/db_bulid.sql`).toString();

const rubDbBuild = cb => {
  dbConnection.query(sql, cb);
};
rubDbBuild((err, res) => {
  if (err) {
    throw err;
  }
  return res;
});

module.exports = rubDbBuild;
