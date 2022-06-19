const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "person",
  port: 3306,
});

async function query(sql, params) {
  await connection.query(sql, function (err, results, fields) {
    if (err) {
      console.log("Error Message " + err.message);
    }

    return results;
  });
}

module.exports = {
  query,
};
