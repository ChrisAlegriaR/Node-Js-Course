import express from "express";
import { login, register } from "../controllers/authController";
import User from "../models/user";

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

export { router };
