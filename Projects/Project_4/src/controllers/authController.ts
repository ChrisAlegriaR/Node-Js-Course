import { type Request, type Response } from "express"

export const register = async(req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
}
