"use strict";
// @ts-nocheck
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// PostgreSQL client setup
const pgClient = new pg_1.Client({
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
    .catch((err) => console.error("Database connection error:", err.message));
// Signup route
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const response = yield pgClient.query(insertQuery, [username, email, password]);
        const newUser = response.rows[0];
        res.status(201).json({ message: "User created successfully", user: newUser });
    }
    catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}));
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
