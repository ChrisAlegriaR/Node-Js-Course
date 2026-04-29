import { User } from "@prisma/client";
import variables from "../config/env"
import jwt from "jsonwebtoken"

const JWT_SECRET: string | undefined = variables.jwt_secret || 'default-secret';

export const generateToken = (user: User): string => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email 
        }, 
        JWT_SECRET,
        {
            expiresIn: '1h' 
        }
    )
}