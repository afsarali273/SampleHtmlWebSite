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
      `INSERT INTO PERSON(first_name,last_name,dob,email,mobile) VALUES ("${person.firstName}","${person.lastName}","${person.DOB}","${person.Email}","94657845")`
    );
    res.send("Person is added to DB");
  } catch (err) {
    console.error(`Error while DB query `, err.message);
  }
});

app.get("/persons", (req, res) => {
  res.json(persons);
});

app.listen(3300);
