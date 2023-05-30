import express from "express";
import User from "../model/model.js";
import { UserLogIn, UserLogOut, UserSignUp } from "../controllers/func.js";

const route=express.Router();


route.post("/login",UserLogIn);

route.post("/signup",UserSignUp);
export default route;

