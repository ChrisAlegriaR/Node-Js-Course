import { type Request, type Response } from "express";
import { hashPassword } from "../services/password.service";
import User from "../models/user"

export const register = async(req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try{    
        const hashedPassword = await hashPassword(password);   
        console.log(hashedPassword);
        
        const user = await User.create(
            {
                data: {
                    email,
                    password: hashedPassword
                }
            }
        )
    } catch(error){

    }
}