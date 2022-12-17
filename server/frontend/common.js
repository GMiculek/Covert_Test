var parsedUrl = new URL(window.location.href);

function query() {
    fetch("http://" + parsedUrl.host + "/query", {
        method: "GET",
        mode: "no-cors",
    })
    .then((resp) => resp.text())
    .then((data) => {
        document.getElementById("response").innerHTML = data;
		
    })
    .catch((err) => {
        console.log(err);
    })
}

function login(){
	

	var user= document.getElementById("Username").value;
	var pass= document.getElementById("Password").value;
	document.writeln("<h1>Confirmation Page</h1><br>");
	document.writeln("Thank you for completing this form.<br><br>");
	document.writeln("The first name you entered is " + firstname + "<br>");
	document.writeln("The last name you entered is " + lastname);	
		
	
	
}
