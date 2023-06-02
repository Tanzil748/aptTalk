import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 4500;
import cors from "cors";
import cookieParser from "cookie-parser";
import { pool } from "./db/connectDb.js";
import { authRouter } from "./routes/authentication.js";

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
