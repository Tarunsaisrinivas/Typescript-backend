import express, { Express, Request, Response } from "express";
import {config} from "dotenv";
import connectDB from "./utils/db";
import bookRoute from "./routes/bookRoute";
import helmet from "helmet";
config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.get("/", (req:Request, res:Response) => {
  res.send("Server is running smoothly 🚀");
});
app.use("/api/books", bookRoute);
app.listen(port, () => {
  connectDB();
  console.log(`✅ Server is running at http://localhost:${port}`);
});
