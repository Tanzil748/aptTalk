import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const app = express();
const port = process.env.PORT || 4500;

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
