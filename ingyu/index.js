
const express = require("express");
const app = express();

function handleListening(){
    console.log("Listening on: http://localhost:4002");
}
app.listen(4002, handleListening); 