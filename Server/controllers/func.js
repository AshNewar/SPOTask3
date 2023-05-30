import express from "express";
import User from "../model/model.js";
import bcrypt from "bcrypt";

export const UserSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const item = await User.findOne({ email: email });
    if (item) {
      res.status(404).json({
        success: false,
        msg: "User already Exits",
      });
      console.log("User already Exits");
    } else {
      const hashPassword = await bcrypt.hash(password, 15);
      const user = await User.create({
        name: name,
        email: email,
        password: hashPassword,
      });
      res.status(200).json({
        success: true,
        msg: "User Created",
      });
      console.log("User Created");
    }
  } catch (error) {
    console.log("Error while SignUp");
  }
};

export const UserLogIn = async(req,res) => {
    try {
        const {email,password}=req.body;
        const item =await User.findOne({email});
        if(!item){
            res.status(404).json({
                success:false,
                msg:"Signup First",
            });
            console.log("SignUp first");
        }
        else{
            const isMatched=await bcrypt.compare(password,item.password);
            if(!isMatched){
                res.status(404).json({
                    success:false,
                    msg:"Invalid password",
                });
                console.log("Invalid password");
            }
            else{
                res.status(200).json({
                    success:true,
                    name:item.name,  
                    msg:"Welcome Back",
                });
                console.log("Welcome Back");
            }
        }
        
    } catch (error) {
        console.log("Error while Log In");
        
    }
};


export const UserLogOut=()=>{
    res.status(202).json({
        success:true,
        msg:"Log Out SuccessFull",
    })
}
