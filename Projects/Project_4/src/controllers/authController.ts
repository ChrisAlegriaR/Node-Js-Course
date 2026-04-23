import { type Request, type Response } from "express";
import { hashPassword, comparePasswords } from "../services/password.service";
import User from "../models/user"
import { generateToken } from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    if(!email){
        res.status(400).json({message: "Es obligatorio proporcionar un email."})
        return;
    } 
        
    if(!password){
        res.status(400).json({message: "Es obligatorio proporcionar una contraseña."})
        return;
    }

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

    } catch(error:any){
        if(error.code === "P2002" && error.meta.target.includes("email")){
            res.status(400).json({message: "Esta registrando un correo ya registrado."}
            )
        }
    }
}

export const login = async(req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if(!email || !password){
        res.status(400).json({message: "Se debe proporcionar un email y contraseña para poder iniciar sesion."});
        return;
    }

    try{
        const user = await User.findUnique(
            {
                where: {email}
            }
        )

        if(!user){
            res.status(400).json({  message: "Este usuario no pudo ser encontrado."})
            return;
        }

        const passwordMatch: Object = await comparePasswords(password, user.password);
        if(!passwordMatch){
            res.status(401).json({error: "Usuario y/o contraseña no coincide."}); 
            return;
        } 

        const token = generateToken(user);
        res.status(200).json({token})

    } catch(error){
        console.log(error);
    }
}