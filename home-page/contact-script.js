const form = document.getElementById("form");

var firstName = form.elements["first"].value;
var lastName = form.elements["second"].value;
var email = form.elements["email"].value;
var telly = form.elements["telly"].value;
var file = form.elements["file"].value;
var message = form.elements["message-box"].value;

var formElement = document.querySelector("form");
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
//request.send(new FormData(firstName));



form.addEventListener("submit", )