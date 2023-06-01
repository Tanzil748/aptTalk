import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 4500;
import { pool } from "./db/connectDb.js";
import cors from "cors";

// middleware
app.use(cors());
app.use(express.json());

// routes

// this is a test
app.get("/api/v1/test", async (req, res) => {
  try {
    res.send("Hello");
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/v1/post", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
