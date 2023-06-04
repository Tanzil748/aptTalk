import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 4500;
import cors from "cors";
import { pool } from "./db/connectDb.js";
import { authRouter } from "./routes/authentication.js";

// middleware
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   next();
// });
app.use(cors());
app.use(express.json());

// routes
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
