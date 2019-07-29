// write the query to get the data from Database
const dbConnection = require("/home/saja-lahaleeh/week6-test/src/database/db_connection.js");

const getData = (city_name, cb) => {
  if (city_name) {
    dbConnection.query("select city_name from cities", (err, res) => {
      if (err) {
        return cb(err);
      }
      console.log("res", res);
      cb(null, res.rows);
    });
  }
};
module.exports = getData;
