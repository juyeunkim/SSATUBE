//const express = require("express");
//babel 을 쓸려면 require 대신 import를 써야 한다. 
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const handleListening = () =>    console.log("Listening on: http://localhost:4002");

const handleHome = (req, res) => res.send('Hello from home3');    

const handleProfile = (req,res) =>     res.send("You are on my profile");
app.use(helmet()); //보안을 위한것이다. 
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser().json());
app.use(bodyParser().urlencoded({extended : true})); //위에서부터 아래로 

const middleware = (req,res,next) => {
    res.send('not happending');
}
//route 
app.get("/",middleware, handleHome); //middleware 로 연결이 끊킨다. 
app.get("/profile", handleProfile);


app.listen(4014, handleListening); 
