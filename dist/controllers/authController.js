"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jwt = __importStar(require("jsonwebtoken"));
const signup = async (req, res) => {
    const { name, email, phone, username, password, role } = req.body;
    try {
        if (!name || !email || !phone || !username || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
                data: null,
            });
        }
        let user;
        user = await user_1.User.findOne({ email: email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
                data: null,
            });
        }
        const securePassword = await bcrypt_1.default.hash(password, 10);
        user = await user_1.User.create({
            name,
            email,
            phone,
            username,
            password: securePassword,
            role,
        });
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            errorMessage: error.message,
            data: null,
        });
        console.log(error);
    }
};
exports.signup = signup;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
                data: null,
            });
        }
        let user;
        user = await user_1.User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password",
                data: null,
            });
        }
        let comparePassword = await bcrypt_1.default.compare(password, user.password);
        if (!comparePassword) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password",
                data: null,
            });
        }
        const payload = {
            id: user._id,
            role: user.role,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        return res.cookie("token", token).json({
            success: true,
            message: "Login successful",
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            errorMessage: error.message,
            data: null,
        });
        console.log(error);
    }
};
exports.login = login;
const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "").json({ success: true, message: "Logout successful", data: null });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Error performing logout", data: null });
    }
};
exports.logout = logout;
//# sourceMappingURL=authController.js.map