//const express = require("express");
//babel 을 쓸려면 require 대신 import를 써야 한다. 
import express from "express";
import morgan from "morgan";
const app = express();

const handleListening = () =>    console.log("Listening on: http://localhost:4002");

const handleHome = (req, res) => res.send('Hello from home3');    

const handleProfile = (req,res) =>     res.send("You are on my profile");

const betweenHome = (req, res, next) =>{
    console.log('Between');
    next(); //다음 미들웨어 호출 
}
app.use(betweenHome); //여기다 둬야 미들웨어 로서 역할을 다할 수 있다. 
app.get("/", betweenHome, handleHome);
app.get("/profile", handleProfile);


app.listen(4012, handleListening); 
