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
		
	const supplied_user = document.getElementById("given_username").value; //gets entered user and password
	const supplied_pass = document.getElementById("given_password").value; 
	
	const info = {supplied_user, supplied_pass} //information to be sent

	fetch("http://" + parsedUrl.host + "/login", {
        method: "POST",
		headers: {
              "Content-Type": "application/json",
            },
        body: JSON.stringify(info), //passes the info to the server 
		
    })
	
	
	.then((resp) => resp.text()) //converts repsonce to text form 
		
	.then((data) => {
		
		if('"OK"' === JSON.stringify(data)){ //if our responce was an "OK"
			
				document.getElementById("show_message").innerHTML = "yes";
				document.getElementById("button1").style.display = 'none'; //changes display to all for query database access
				document.getElementById("show_message").style.display = 'none';
				document.getElementById("given_password").style.display = 'none';
				document.getElementById("given_username").style.display = 'none';
				document.getElementById("button2").style.display = "block"; 
				document.getElementById("response").style.display = "block"; 
					
		}
		
		else{
			
			document.getElementById("show_message").innerHTML = JSON.stringify(data); //shows error message in text box
			
		}
		
    })
	
    .catch((err) => {
        console.log(err);
    })
	
	
}
	