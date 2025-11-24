import { Router } from "express";
import { addBook, deleteBook, getBooks, updateBook } from "../controllers/bookController";
import verifyToken from "../middleware/verifyToken";
const router = Router();

router.get("/get-books", getBooks);
router.post('/add-book', verifyToken, addBook);
router.put("/update-book/:id",verifyToken, updateBook);
router.delete("/delete-book/:id",verifyToken, deleteBook);

export default router;
