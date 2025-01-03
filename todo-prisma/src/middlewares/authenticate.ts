import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default-secret";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized access" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
        req.body.userId = decoded.userId;
        next();
    } catch {
        res.status(401).json({ error: "Invalid token" });
    }
};
