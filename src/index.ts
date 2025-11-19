import express, { Express, Request, Response } from "express";
import {config} from "dotenv";
import connectDB from "./utils/db";
import bookRoute from "./routes/bookRoute";
import helmet from "helmet";
import authRouter from "./routes/authRoute";
config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(helmet());
app.get("/", (req:Request, res:Response) => {
  res.send("Server is running smoothly 🚀");
});
app.use("/api/books", bookRoute);
app.use("/api/auth", authRouter);
app.listen(port, () => {
  connectDB();
  console.log(`✅ Server is running at http://localhost:${port}`);
});
