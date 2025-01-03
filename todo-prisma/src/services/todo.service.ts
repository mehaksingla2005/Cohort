import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

import { TodoSchema } from "../models/todo.schema";

export const createTodo = async (data: TodoSchema & { userId: number }) => {
    return await prisma.todo.create({ data });
};

export const getTodos = async (userId: number) => {
    return await prisma.todo.findMany({ where: { userId } });
};
