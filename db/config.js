var pgPromise = require("pg-promise");
var pgInstance = pgPromise();

var config = {
  host: "localhost",
  port: 5432,
  database: "pnu_assistive",
  user: "muneerabinbaz"
};

var connection = pgInstance(config);

module.exports = connection;