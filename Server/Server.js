import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./model/connect.js";
import Router from "./Route/route.js";
import cors from "cors";

dotenv.config();


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST"],
    credentials:true,
}))
app.use(Router);



app.listen(8080,()=>{
    console.log("Server Started at Port 8080");
});

connectDB();
