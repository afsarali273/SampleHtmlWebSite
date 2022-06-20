const mysql = require("mysql");
var express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

var app = express();

app.use(cors());

let persons = [];
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/addPerson", async (req, res) => {
  const person = JSON.parse(JSON.stringify(req.body));

  console.log("POST called");
  console.log(person);
  persons.push(person);
  try {
    await db.query(
      `INSERT INTO PERSON(person_id,first_name,last_name,dob,email,mobile) VALUES ("${person.personId}","${person.firstName}","${person.lastName}","${person.DOB}","${person.Email}","94657845")`
    );
    res.send("Person is added to DB");
  } catch (err) {
    console.error(`Error while DB query `, err.message);
  }
});

app.patch("/updatePerson", async (req, res) => {
  const person = JSON.parse(JSON.stringify(req.body));
  let sqlQuery = `UPDATE PERSON
SET institute_name = "${person.instituteName}", hsc_board = "${person.hscBoard}",ssc_board="${person.sscBoard}"
WHERE person_id="${person.personId}"`;
  console.log("PATCH called");
  console.log(person);
  persons.push(person);
  try {
    await db.query(sqlQuery);
    res.send("Person details is updated to DB");
  } catch (err) {
    console.error(`Error while DB query `, err.message);
  }
});

app.get("/persons", async (req, res, next) => {
  db.getAllPersonDetails(req, res, next);
});

app.listen(3300);
