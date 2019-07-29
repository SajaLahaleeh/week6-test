const { readFile } = require("fs");
const path = require("path");
const qs = require("qs");
const getData = require("/home/saja-lahaleeh/week6-test/src/database/queries/getData.js");
const postData = require("/home/saja-lahaleeh/week6-test/src/database/queries/postData.js");

const serverError = (err, response) => {
  response.writeHead(500, "Content-Type:text/html");
  response.end("<h1>Sorry, there was a problem loading the homepage</h1>");
  console.log(err);
};

const homeHandler = response => {
  const filepath = path.join(__dirname, "..", "..", "public", "index.html");
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  });
};

const getCitiesHandler = response => {
  // write your own function that gets data from your database and response with  the result
  getData((err, result) => {
    if (err) {
      console.log(err);
      response.writeHead(500, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "error" }));
    } else {
      const output = JSON.stringify(result);
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(output);
    }
  });
};

const postCityHandler = (request, response) => {
  // write your code to get the data from html form, then insert the data into the database
  let data = "";
  request.on("data", chunk => {
    data += chunk;
  });
  request.on("end", () => {
    const cities = qs.parse(data);
    postData(cities.city_name, country, err => {
      if (err) {
        response.writeHead(500, { "Content-Type": "text/html" });
        response.end("<h1>Server Error</h1>");
      }
      response.writeHead(302, { Location: "/" });
      response.end();
    });
  });
};

const publicHandler = (url, response) => {
  const filepath = path.join(__dirname, "..", "..", url);
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    const extension = url.split(".")[1];
    const extensionType = {
      html: "text/html",
      css: "text/css"
    };
    response.writeHead(200, { "content-type": extensionType[extension] });
    response.end(file);
  });
};

const errorHandler = response => {
  response.writeHead(404, { "content-type": "text/html" });
  response.end("<h1>404 Page Requested Cannot be Found</h1>");
};

module.exports = {
  homeHandler,
  getCitiesHandler,
  postCityHandler,
  publicHandler,
  errorHandler
};
