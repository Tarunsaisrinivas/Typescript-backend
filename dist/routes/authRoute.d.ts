declare const authRouter: import("express-serve-static-core").Router;
/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: User signup
 *     tags: [Auth]
 *     responses:
 *       201:
 *         description: Signup successful
 */
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Login successful
 */
/**
 * @swagger
 * /api/auth/logout:
 *   get:
 *     summary: Logout user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Logged out
 */
export default authRouter;
//# sourceMappingURL=authRoute.d.ts.map