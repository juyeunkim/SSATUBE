//const express = require("express");
//babel 을 쓸려면 require 대신 import를 써야 한다. 
import express from "express";
const app = express();

const handleListening = () =>    console.log("Listening on: http://localhost:4002");

const handleHome = (req, res) => res.send('Hello from home3');    

const handleProfile = (req,res) =>     res.send("You are on my profile");

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(4012, handleListening); 
