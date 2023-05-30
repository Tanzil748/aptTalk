const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4500;
const pool = require("./db/connectDb.js");
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// routes

// this is a test
app.post("/api/v1/test", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
