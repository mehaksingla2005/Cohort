// @ts-nocheck

import express, { Request, Response } from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

// PostgreSQL client setup
const pgClient = new Client({
    user: "todos_owner",
    password: "mlWD25wViUZS",
    port: 5432,
    host: "ep-little-sun-a5qolv5y.us-east-2.aws.neon.tech",
    database: "todos",
    ssl: {
        rejectUnauthorized: false, // Use with caution; ensure secure connections
    },
});

// async function main(){
//     await pgClient.connect();
//     const response=await pgClient.query("SELECT * FROM users;");
//     console.log(response)
// }
// main()
pgClient.connect()
    .then(() => console.log("Connected to the database"))
    .catch((err: Error) => console.error("Database connection error:", err.message));

// Signup route
app.post("/signup", async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    // Validate request body
    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const insertQuery = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
        const response = await pgClient.query(insertQuery, [username, email, password]);
        const newUser = response.rows[0];
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error: any) {
        console.error("Error during signup:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});