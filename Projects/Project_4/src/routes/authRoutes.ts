import express from "express";
import { login, register } from "../controllers/authController";
import User from "../models/user";

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/', async(req,res) => {
    try{
        const dbResponse = await User.findMany();
        res.status(201).json(dbResponse);
    }catch (error){
        res.status(500).json(
            {
                message: error
            }
        )
    }
});

export { router };
