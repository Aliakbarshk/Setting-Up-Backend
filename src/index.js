//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';


import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";  
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env',
})



connectDB()





