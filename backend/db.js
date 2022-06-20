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

async function getAllPersonDetails(req, res, next) {
  await connection.query("SELECT * FROM person", function (err, data, fields) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
}

module.exports = {
  query,
  getAllPersonDetails,
};
