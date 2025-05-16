import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import route from "./routes/route.js";

const app = express();

// Middleware
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_BASE_URL;
// MongoDB connection
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(`MongoDB connection error: ${error}`);
  });


app.use("/api/employees", route)

