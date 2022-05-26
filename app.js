const express  = require("express")
const bodyParser = require("body-parser")
const https = require("https")

const app =  express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", function(req, res){
  console.log("Up and running")
  res.sendFile(__dirname + "/signup.html")

})

app.post("/", function(req, res){
  var firstName = req.body.fname
  var lastName = req.body.lname
  var email = req.body.email
  console.log(firstName)
  console.log(lastName)
  console.log(email)


})

app.listen("3000", function(){
  console.log(" Server is running in port 3000")
})

// c067e4a7e7d4454dc423d8fa1356df7f-us17

// ff8d47eb5f043c181caf3c98044f6e9d-us17

// 2518dc9d48
