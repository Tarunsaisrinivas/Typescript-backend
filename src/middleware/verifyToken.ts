import { Request,Response,NextFunction } from "express";
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const cookie = req.headers.cookie;
        console.log("The cookie is:",cookie);
        const token = cookie?.split("=")[1];        
        console.log("The token is:",token);
    } catch (error:any) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            errorMessage: error.message,
            data: null,
        });
    }
}