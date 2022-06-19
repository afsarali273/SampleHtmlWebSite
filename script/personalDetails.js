function savePersonalDetails() {
  let firstName1 = document.getElementById("First_Name").value;
  let lastName1 = document.getElementById("Last_Name").value;
  let dob1 = document.getElementById("date").value;
  let email1 = document.getElementById("Email").value;

  // Similarly for all other fields to be done

  var personObject = {
    firstName: firstName1,
    lastName: lastName1,
    DOB: dob1,
    Email: email1,
  };
  UserAction(personObject);
}

function UserAction(personObject) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      window.location.href = "../html/Page2_educationQualification.html";
    }
  };
  xhttp.open("POST", "http://localhost:3300/addPerson", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  console.log("Object from html " + JSON.stringify(personObject));
  xhttp.send(JSON.stringify(personObject));
}
