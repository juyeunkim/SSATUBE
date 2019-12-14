import express from "express";
export const uesrRouter = express.Router();
//module.exports = uesrRouter;
uesrRouter.get("/", (req,res)=> res.send("user index"));
uesrRouter.get("/edit", (req,res)=> res.send("user edit"));
uesrRouter.get("/password", (req,res)=> res.send("user password"));
