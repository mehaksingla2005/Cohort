import { z } from "zod";

export const todoSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    done: z.boolean().default(false),
});

export type TodoSchema = z.infer<typeof todoSchema>;
