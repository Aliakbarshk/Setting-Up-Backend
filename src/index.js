import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

const app = express(); // ✅ define app
const Port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.get("/", (req, res) => {
      // ✅ define a proper route
      res.send(
        "<h1 style='color:green'>Everything is working fine. Database and Server connected</h1>",
      );
    });

    const server = app.listen(Port, () => {
      console.log(`Server is running at http://localhost:${Port}`);
    });

    server.on("error", (err) => {
      // ✅ correct usage of .on("error")
      console.log(`Server error: ${err}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });
