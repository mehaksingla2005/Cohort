import express from "express";
import { addTodo, fetchTodos } from "../controllers/todo.controller";
import { authenticate } from "../middlewares/authenticate";

const router = express.Router();

router.post("/", authenticate, addTodo);
router.get("/", authenticate, fetchTodos);

export default router;
