import { Request, Response } from "express";
import { userSchema } from "../models/user.schema";
import { signupService, loginService } from "../services/auth.service";

export const signup = async (req: Request, res: Response) => {
    try {
        const data = userSchema.parse(req.body);
        const result = await signupService(data);
        res.status(201).json(result);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const data = userSchema.parse(req.body);
        const result = await loginService(data);
        res.status(200).json(result);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
