
import mongoose from "mongoose";
 const schema=new mongoose.Schema({
    name:String,
    password:String,
    email:String
 });

 const User=mongoose.model("info",schema);
 export default User;

