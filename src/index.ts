import express, { Express, Request, Response } from "express";
import {config} from "dotenv";
import connectDB from "./utils/db";

config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req:Request, res:Response) => {
  res.send("Server is running smoothly 🚀");
});

app.listen(port, () => {
  connectDB();
  console.log(`✅ Server is running at http://localhost:${port}`);
});
