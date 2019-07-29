// write the query to post the data into Database
const dbConnection = require("/home/saja-lahaleeh/week6-test/src/database/db_connection.js");
const postData = (city_name, country, cb) => {
  dbConnection.query(
    `
    INSERT INTO cities (city_name,country) VALUES ($1,$2)`,
    [city_name, country],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};
module.exports = postData;
