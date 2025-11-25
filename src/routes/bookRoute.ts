import { Router } from "express";
import { addBook, deleteBook, getBooks, updateBook } from "../controllers/bookController";
import verifyToken from "../middleware/verifyToken";
const router = Router();

router.get("/get-books", getBooks);
router.post('/add-book', verifyToken, addBook);
router.put("/update-book/:id",verifyToken, updateBook);
router.delete("/delete-book/:id",verifyToken, deleteBook);
/**
 * @swagger
 * /api/books/get-books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: List of all books
 */

/**
 * @swagger
 * /api/books/add-book:
 *   post:
 *     summary: Add a new book
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Book created successfully
 */

/**
 * @swagger
 * /api/books/update-book/{id}:
 *   put:
 *     summary: Update a book
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Book updated successfully
 */

/**
 * @swagger
 * /api/books/delete-book/{id}:
 *   delete:
 *     summary: Delete a book
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Book deleted successfully
 */

export default router;
