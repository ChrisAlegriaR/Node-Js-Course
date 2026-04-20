import { type Request, type Response } from "express";
import { hashPassword } from "../services/password.service";
import User from "../models/user"
import { generateToken } from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
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

        const token = generateToken(user);
        res.status(201).json({token})

    } catch(error){
        res.status(500).json(
            {
                message: error
            }
        )
    }
}