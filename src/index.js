//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';


import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";  
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env',
})

const Port = process.env.PORT || 3000;


connectDB()
.then(()=>{
    app.listen(Port, (req , res) => {
        console.log(`Server is runnig at http://localhost:${Port}`)
        res.send("<h1 style ='color:green'>Everything is working fine Database and Server</h1>");
        console.dir(req.params.name);
    })
    app.on("error something went wrong :/ " , (err) =>{
        console.log(`Error ${err}`)
        res.send("Error Database Aint connecting");
        
    })
})
.catch((err) => {
    console.log("MongoDB connection failed")
})





