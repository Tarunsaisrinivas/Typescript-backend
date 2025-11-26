import express, { Express } from "express";
import { config } from "dotenv";
import connectDB from "./utils/db";
import bookRoute from "./routes/bookRoute";
import authRouter from "./routes/authRoute";
import helmet from "helmet";
config();
const app: Express = express();
app.use(express.json());
app.use(helmet());
app.get("/", (req, res) => {
  res.send("Server is running smoothly 🚀");
});
app.use("/api/books", bookRoute);
app.use("/api/auth", authRouter);
connectDB();
export default app;
