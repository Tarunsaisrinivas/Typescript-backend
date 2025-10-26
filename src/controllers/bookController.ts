import { Request, Response } from "express";
import Book from "../models/book";
interface IResponse {
  success: boolean;
  message: string;
  data?: any;
}
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find({});
    if (!books) {
      return res.status(404).json({
        success: false,
        message: "No books found",
      } as IResponse);
    }
    return res.status(200).json({
      success: true,
      message: "Books fetched successfully",
      data: books,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      errorMessage: error.message,
    } as IResponse);
  }
};

export const addBook = async (req: Request, res: Response) => {
  const { name, author, publishedYear, description } = req.body;

  try {
    const book = await Book.create({
      name,
      author,
      publishedYear,
      description,
    });
    return res.status(201).json({
      success: true,
      message: "Book added successfully",
      data: book,
    } as IResponse);
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      errorMessage: error.message,
    });
  }
};
