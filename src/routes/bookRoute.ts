import { Router } from "express";
import { addBook, deleteBook, getBooks, updateBook } from "../controllers/bookController";

const router = Router();

router.get("/get-books", getBooks);
router.post('/add-book', addBook);
router.put("/update-book/:id", updateBook);
router.delete("/delete-book/:id", deleteBook);

export default router;
