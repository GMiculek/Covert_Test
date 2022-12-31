const express = require("express");
const mysql = require("mysql2");
var crypto = require("crypto");


const PORT = String(process.env.PORT);
const HOST = String(process.env.HOST);
const MYSQLHOST = String(process.env.MYSQLHOST);
const MYSQLUSER = String(process.env.MYSQLUSER);
const MYSQLPASS = String(process.env.MYSQLPASS);
const SQL = "SELECT * FROM users"


const app = express();
app.use(express.json());



let connection = mysql.createConnection({
  host: MYSQLHOST,
  user: MYSQLUSER,
  password: MYSQLPASS,
  database: "users"
});


app.use("/", express.static("frontend"));


app.get("/query", function (request, response) {
  connection.query(SQL, [true], (error, results, fields) => {
    if (error) {
      console.error(error.message);
      response.status(500).send("database error");
    } else {
      console.log(results);
      response.send(results);
    }
  });
});



app.post("/login", function (req, res) {
	 
   var String_of_user = JSON.stringify(req.body.supplied_user);
   var String_of_pass = JSON.stringify(req.body.supplied_pass);
 
	  
   var SQL2 = "SELECT username FROM users where username = " + String_of_user;
  
   connection.query(SQL2, [true], (error, results, fields) => {
	    
	  if (results == ""){  //if username is not found in data base
		  res.sendStatus(401); //send 401 error message
		  res.end();
		  
	  }
	  
	  else{
		  
		const hash = crypto.createHash('sha256').update(String_of_pass).digest('hex'); //hashs the the inputed password 
		var hash_of_supplied_pass = JSON.stringify(hash);
		var SQL3 = "SELECT password FROM users where username = " + String_of_user + " AND password = " +hash_of_supplied_pass;
	  
		connection.query(SQL3, [true], (error, results, fields) => {
	  
	  
		if (results == ""){ //if the determined to already exist user doesn't have an hash password that matches the data base
		  
		  
		  res.sendStatus(401); //send 401 error message
		  res.end();
		}
	  
		else{
		console.log("Welcome " + String_of_user);
		res.sendStatus(200); //send 200 responce, "OK"
		res.end();
		}
  })
	  
	  }
  })
  
});





app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
