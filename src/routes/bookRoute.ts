import { Router } from "express";
import { addBook, getBooks, updateBook } from "../controllers/bookController";

const router = Router();

router.get("/get-books", getBooks);
router.post('/add-book', addBook);
router.put("/update-book/:id", updateBook);

export default router;
