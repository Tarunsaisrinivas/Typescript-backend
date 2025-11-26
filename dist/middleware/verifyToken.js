"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    try {
        const cookie = req.headers.cookie;
        // console.log("The cookie is:",cookie);
        const token = cookie === null || cookie === void 0 ? void 0 : cookie.split("=")[1];
        // console.log("The token is:",token);
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access denied Unauthorized",
                data: null,
            });
        }
        const data = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.id = data.id;
        req.role = data.role;
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            errorMessage: error.message,
            data: null,
        });
    }
};
exports.default = verifyToken;
//# sourceMappingURL=verifyToken.js.map