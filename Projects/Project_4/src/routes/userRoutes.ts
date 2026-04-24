import express, { Request, Response, NextFunction } from "express";
import  jwt from "jsonwebtoken";
import variables from "../config/env";

const router = express.Router();

const authenticateToken = async(req: Request, res: Response, next: NextFunction) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({error: "No autorizado."});
    }

    try{
        const verification = jwt.verify(token, variables.jwt_secret || "default-secret", (err, decoded) => {
            if(err){
                console.error('Error en la autenticacion.');
                res.status(403).json({error: "No tienes acceso a este recurso"})
            } 

            next();
        });    

    } catch(error){
        return res.status(400).json(error)
    }
} 

router.post("/", authenticateToken, (req, res) => {})
router.get("/", authenticateToken, (req, res) => {})
router.get("/:id", authenticateToken, (req, res) => {})
router.put("/:id", authenticateToken, (req, res) => {})
router.delete("/:id", authenticateToken, (req, res) => {})

export { router };