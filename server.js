var express = require('express')
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var email = require("./data/db")
var app = express();

//middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.get("/", (req,res)=>{
	res.sendFile(__dirname + "/public/index.html")
})

app.get("/contact", (req,res)=>{
	res.sendFile(__dirname + "/public/contact.html")
})

app.post("/collect", (req,res)=>{
  var data = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }
  email.gather(data,()=>{
    res.redirect("/")
  })
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
