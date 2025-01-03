import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

import { UserSchema } from "../models/user.schema";

const JWT_SECRET = process.env.JWT_SECRET || "default-secret";

export const signupService = async ({ username, password }: UserSchema) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) throw new Error("Username already taken");

    const user = await prisma.user.create({
        data: { username, password: hashedPassword },
    });

    return { message: "User created successfully", userId: user.id };
};

export const loginService = async ({ username, password }: UserSchema) => {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) throw new Error("Invalid credentials");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Invalid credentials");

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
    return { message: "Login successful", token };
};
