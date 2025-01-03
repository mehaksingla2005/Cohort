import { Request, Response } from "express";
import { todoSchema } from "../models/todo.schema";
import { createTodo, getTodos } from "../services/todo.service";

export const addTodo = async (req: Request, res: Response) => {
    try {
        const data = todoSchema.parse(req.body);
        const { userId } = req.body;
        const todo = await createTodo({ ...data, userId });
        res.status(201).json(todo);
    } catch (err) {
        res.status(400).json({ error: "Invalid data" });
    }
};

export const fetchTodos = async (req: Request, res: Response) => {
    try {
        const { userId } = req.body;
        const todos = await getTodos(userId);
        res.status(200).json(todos);
    } catch {
        res.status(500).json({ error: "Unable to fetch todos" });
    }
};
