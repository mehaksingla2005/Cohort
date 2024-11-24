"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("user connected");
    // setInterval(()=>{
    //     socket.send("current solana price is :"+Math.random())
    // },500);
    socket.on("message", (message) => {
        if (message.toString() === "ping") {
            socket.send("pong");
        }
        console.log("Received message:", message.toString());
    });
});
