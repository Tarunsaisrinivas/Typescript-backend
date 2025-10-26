import { Request, Response } from "express";
import Book from "../models/book";
interface IResponse {
  success: boolean;
  message: string;
  data?: any;
}
export const getBooks = (req: Request, res: Response) => {
  res.json({ success: false, message: "Books found" } as IResponse);
};

export const addBook = async (req: Request, res: Response) => {
  const { name, author, publishedYear, description } = req.body;

  try {
    const book = Book.create({
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
