function savePersonalDetails() {
  let firstName1 = document.getElementById("First_Name").value;
  let lastName1 = document.getElementById("Last_Name").value;
  let dob1 = document.getElementById("date").value;
  let email1 = document.getElementById("Email").value;

  // Similarly for all other fields to be done

  var personObject = {
    personId: uuidv4(),
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
  sessionStorage.clear();
  sessionStorage.setItem("person", JSON.stringify(personObject));
  xhttp.send(JSON.stringify(personObject));
}
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
