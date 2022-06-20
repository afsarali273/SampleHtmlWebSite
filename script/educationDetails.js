function saveEducationDetails() {
  let instituteName1 = document.getElementById("insName").value;
  let hscBoard1 = document.getElementById("hsc_board").value;
  let sscBoard1 = document.getElementById("ssc_board").value;

  let personObj = JSON.parse(sessionStorage.getItem("person"));
  personObj.instituteName = instituteName1;
  personObj.hscBoard = hscBoard1;
  personObj.sscBoard = sscBoard1;
  UserAction(personObj);
}

function UserAction(personObject) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      window.location.href = "../html/fileUpload3.html";
    }
  };
  xhttp.open("PATCH", "http://localhost:3300/updatePerson", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  console.log("Object from html " + JSON.stringify(personObject));
  sessionStorage.clear();
  sessionStorage.setItem("person", JSON.stringify(personObject));
  xhttp.send(JSON.stringify(personObject));
}
