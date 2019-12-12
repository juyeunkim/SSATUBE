const express = require("express");
const app = express();

function handleListening(){
    console.log("Listening on: http://localhost:4002");
}
function handleHome(req, res){
    console.log(req);
    res.send('Hello from home');    
}
function handleProfile(req,res){
    res.send("You are on my profile");
}
app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(4007, handleListening); 
