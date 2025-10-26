import { Router } from "express";
import { addBook, getBooks } from "../controllers/bookController";

const router = Router();

router.get("/get-books", getBooks);
router.post('/add-book', addBook);

export default router;
