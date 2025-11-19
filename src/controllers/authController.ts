import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { IResponse } from "./bookController";
import { IUser, User } from "../models/user";

export const signup = async (req: Request, res: Response) => {
  const { name, email, phone, username, password, role } = req.body;
  try {
    if (!name || !email || !phone || !username || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
        data: null,
      } as IResponse);
    }
    let user: IUser | null;
    user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
        data: null,
      } as IResponse);
    }
    const securePassword = await bcrypt.hash(password, 10);

    user = await User.create({
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
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      errorMessage: error.message,
      data: null,
    } as IResponse);
    console.log(error);
  }
};
