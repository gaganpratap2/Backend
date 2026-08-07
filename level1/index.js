import express from "express";
import dotenv from "dotenv";
dotenv.config();

const Port=process.env.PORT || 3000;

const app=express();

app.get("/",(req,res)=>{
    return res.status(200).json({message:"Hello Gagan"});

});


app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
});