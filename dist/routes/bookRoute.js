"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookController_1 = require("../controllers/bookController");
const verifyToken_1 = __importDefault(require("../middleware/verifyToken"));
const router = (0, express_1.Router)();
router.get("/get-books", bookController_1.getBooks);
router.post('/add-book', verifyToken_1.default, bookController_1.addBook);
router.put("/update-book/:id", verifyToken_1.default, bookController_1.updateBook);
router.delete("/delete-book/:id", verifyToken_1.default, bookController_1.deleteBook);
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
exports.default = router;
//# sourceMappingURL=bookRoute.js.map