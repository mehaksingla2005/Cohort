// import express from "express";
// import dotenv from "dotenv";
// import authRoutes from "./routes/auth.routes";
// import todoRoutes from "./routes/todo.routes";
// // import {z} from "zod";
// // import bcrypt from "bcryptjs"
// // import { PrismaClient } from "@prisma/client";
// // import jwt from "jsonwebtoken";

// dotenv.config();
// const app=express();
// //const prisma=new PrismaClient();
// const PORT=process.env.PORT || 3000;
// //const jwt_secret=process.env.JWT_SECRET ||"default-secret";

// app.use(express.json());
// app.use("/auth", authRoutes);
// app.use("/todos", todoRoutes);
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
//   });






import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


