import { Request, Response } from "express";
import Book from "../models/book";
import { ROLES } from "../utils/role";
export interface IResponse {
  success: boolean;
  message: string;
  data?: any;
}
export const getBooks = async (req: Request, res: Response) => {
  // return res.status(200).json({success:true,message:"Books fetched successfully",data:{id:req.id,role:req.role}} as IResponse);
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
  if(![ROLES.creator,ROLES.admin].includes(req.role as string)){
    return res.status(401).json({
      success: false,
      message: "Your not allowed to access this resorce",
    } as IResponse);
  }
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

export const updateBook = async(req:Request,res:Response) =>{
    if (![ROLES.creator, ROLES.admin].includes(req.role as string)) {
      return res.status(401).json({
        success: false,
        message: "Your not allowed to access this resorce",
      } as IResponse);
    }
  const { id } = req.params;
  const { name, author, publishedYear, description } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(id, { name, author, publishedYear, description},{new:true});
    if (!book) return res.status(404).json({
      success: false,
      message: "Book not found",
    } as IResponse);

    return res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    } as IResponse);
  }
  catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      errorMessage: error.message,
    } as IResponse);
  }
}

export const deleteBook = async(req:Request,res:Response) =>{
    if (![ROLES.creator, ROLES.admin].includes(req.role as string)) {
      return res.status(401).json({
        success: false,
        message: "Your not allowed to access this resorce",
      } as IResponse);
    }
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) return res.status(404).json({
      success: false,
      message: "Book not found",
    } as IResponse);

    return res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: book,
    } as IResponse);
  }
  catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      errorMessage: error.message,
    } as IResponse);
  }
}