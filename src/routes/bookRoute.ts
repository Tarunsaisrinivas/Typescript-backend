import { Router } from "express";
import { getBooks } from "../controllers/bookController";

const router = Router();

router.get("/get-books", getBooks);

export default router;
