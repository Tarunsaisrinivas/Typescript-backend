"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.addBook = exports.getBooks = void 0;
const book_1 = __importDefault(require("../models/book"));
const role_1 = require("../utils/role");
const getBooks = async (req, res) => {
    // return res.status(200).json({success:true,message:"Books fetched successfully",data:{id:req.id,role:req.role}} as IResponse);
    try {
        const books = await book_1.default.find({});
        if (!books) {
            return res.status(404).json({
                success: false,
                message: "No books found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Books fetched successfully",
            data: books,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            errorMessage: error.message,
        });
    }
};
exports.getBooks = getBooks;
const addBook = async (req, res) => {
    if (![role_1.ROLES.creator, role_1.ROLES.admin].includes(req.role)) {
        return res.status(401).json({
            success: false,
            message: "Your not allowed to access this resorce",
        });
    }
    const { name, author, publishedYear, description } = req.body;
    try {
        const book = await book_1.default.create({
            name,
            author,
            publishedYear,
            description,
        });
        return res.status(201).json({
            success: true,
            message: "Book added successfully",
            data: book,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            errorMessage: error.message,
        });
    }
};
exports.addBook = addBook;
const updateBook = async (req, res) => {
    if (![role_1.ROLES.creator, role_1.ROLES.admin].includes(req.role)) {
        return res.status(401).json({
            success: false,
            message: "Your not allowed to access this resorce",
        });
    }
    const { id } = req.params;
    const { name, author, publishedYear, description } = req.body;
    try {
        const book = await book_1.default.findByIdAndUpdate(id, { name, author, publishedYear, description }, { new: true });
        if (!book)
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        return res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: book,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            errorMessage: error.message,
        });
    }
};
exports.updateBook = updateBook;
const deleteBook = async (req, res) => {
    if (![role_1.ROLES.creator, role_1.ROLES.admin].includes(req.role)) {
        return res.status(401).json({
            success: false,
            message: "Your not allowed to access this resorce",
        });
    }
    const { id } = req.params;
    try {
        const book = await book_1.default.findByIdAndDelete(id);
        if (!book)
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        return res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: book,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            errorMessage: error.message,
        });
    }
};
exports.deleteBook = deleteBook;
//# sourceMappingURL=bookController.js.map