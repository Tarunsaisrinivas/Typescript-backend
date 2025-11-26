"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const authRouter = (0, express_1.Router)();
authRouter.post('/signup', authController_1.signup);
authRouter.post('/login', authController_1.login);
authRouter.get('/logout', authController_1.logout);
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
exports.default = authRouter;
//# sourceMappingURL=authRoute.js.map