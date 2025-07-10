import dotenv from "dotenv";
import mongoose from "mongoose";
import { app } from "./app.js";
import connectDB from "./db/index.js";

// Load env vars
dotenv.config({ path: "./.env" }); // ✅ use .env not "env"

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.get("/", (req, res) => {
      res.send("<h1 style='color:green'>Everything is working fine</h1>");
    });

    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed:", err);
  });
