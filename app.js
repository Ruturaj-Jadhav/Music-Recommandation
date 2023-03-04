const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.get('/' , function(req , res){
res.render('index' , {});
});

var sleppyarr = []

const fs = require("fs");

// Read users.json file
fs.readFile("sleepy.json", function(err, data) {
    // Check for errors
    if (err) throw err;
    // Converting to JSON
    const sleepy = JSON.parse(data);

    for(var i =0 ; i < 10 ;i++){
      sleppyarr[i] = "https://open.spotify.com/embed/track/"+sleepy[i].id+"?utm_source=generator";
    }
});


app.get('/sleepy' , function(req , res){
  console.log(sleppyarr[0])
  res.render('sleepy' , {sleppyarr : sleppyarr })
});







app.listen(3000, function(){
  console.log("Server Started");
});
