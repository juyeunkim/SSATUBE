//const express = require("express");
//babel 을 쓸려면 require 대신 import를 써야 한다. 
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { uesrRouter } from "./routers/userRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})); //위에서부터 아래로 
app.use(helmet()); //보안을 위한것이다. 
app.use(morgan("dev"));

app.use(
    "/",globalRouter
);
app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);
export default app;
