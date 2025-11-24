import { Request,Response,NextFunction } from "express";
import { IResponse } from "../controllers/bookController";
import jwt,{ Secret } from "jsonwebtoken";
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const cookie = req.headers.cookie;
        // console.log("The cookie is:",cookie);
        const token = cookie?.split("=")[1];        
        // console.log("The token is:",token);
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Access denied Unauthorized",
                data: null,
            } as IResponse);
        }
       const data = jwt.verify(token, process.env.JWT_SECRET as Secret) as {id:string,role:string};
       req.id = data.id;
       req.role = data.role;
       next();
       
    } catch (error:any) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            errorMessage: error.message,
            data: null,
        } as IResponse);
    }
}
export default verifyToken;