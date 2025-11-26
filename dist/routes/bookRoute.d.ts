declare const router: import("express-serve-static-core").Router;
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
//# sourceMappingURL=bookRoute.d.ts.map