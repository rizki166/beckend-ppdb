import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "../beckend-ppdb/src/db/index";
import router from "./src/route";
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(PORT, async () => {
  try {
    await db.$connect();
    console.log(`Server is running on PORT ${PORT}`);
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
});