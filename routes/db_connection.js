var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

var sql = "SELECT * FROM user";

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function(err, result, fields) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result));
  });
});