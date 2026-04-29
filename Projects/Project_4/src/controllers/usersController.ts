import express, { Request, Response } from "express";
import { hashPassword } from "../services/password.service";
import prisma from "@prisma/client";
import User from "../models/user";

export const createUser = async(req:Request, res:Response):Promise<void> => {
    try{
        const {email, password} = req.body;
        const hashedPassword = await hashPassword(password);
        if(!password){
            res.status(400).json({message: "El password es obligatorio."});
            return;
        }
        if(!email){
            res.status(400).json({message: "El email es obligatorio."});
            return;
        }
        const user = await User.create(
            {
                data: {
                    email,
                    password: hashedPassword
                }
            }
        )
        res.status(201).json({message: user});
    } catch(error: any){
        if(error.code === "P2002" && error.meta.target.includes("email")){
            res.status(400).json({message: "Esta registrando un correo ya registrado."});
        }   
        console.log(error);
        res.status(500).json({error: "Hubo un error, intentelo mas tarde."});
    }
}

export const getAllUsers = async(req: Request, res: Response): Promise<void> => {
    try{
        const getUsers = await User.findMany();
        res.status(200).json(getUsers)
    } catch(error){
        console.log(error);
        res.status(500).json({error: "Hubo un error, intentelo mas tarde."});
    }
}

export const getUserById = async(req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const userId = Number(id);
    try{
        const user = await User.findUnique(
            {
                where: {
                    id: userId
                }
            }
        );
        if(!user){
            res.status(404).json({error: "El usuario no fue encontrado."});
            return;
        }
        res.status(200).json(user)
    } catch(error){
        console.log(error);
        res.status(500).json({error: "Hubo un error, intentelo mas tarde."});
    }
}

export const updateUser = async(req: Request, res: Response) => {
    const { id } = req.params;
    const userId = Number(id)
    const {email, password} = req.body;
    try{
        let dataToUpdate: any = { ...req.body} 
        if(password){
            const hashedPassword = await hashPassword(password);
            dataToUpdate.password = hashedPassword;
        }
        
        if(email){
            dataToUpdate.email = email;
        }

        const user = await User.update({
            where: { id: userId },
            data: dataToUpdate
        })
        res.status(200).json(user);
    } catch(error: any){
        if(error.code === 'P2002' && error.meta.target.includes('email')){
            res.status(400).json({error: "El email ingresado ya existe."})
        } else if(error.code == "P2025"){
            res.status(404).json("Usuario encontrado.")
        }
        console.log(error);
        res.status(500).json({error: "Hubo un error, intentelo mas tarde."});
    }
}

export const deleteUser = async(req: Request, res: Response) => {
    const { id } = req.params;
    if(!id){
        res.status(500).json({error: "Es necesario el id del usuario."})
        return;
    }
    const userId = Number(id);
    try{
        await User.delete({
            where: {
                id: userId
            }
        });
        res.status(200).json("El usuario a sido eliminado.");
    } catch(error) {
        console.log(error);
        res.status(500).json({error: "Hubo un error, intentelo mas tarde."});
    }
}