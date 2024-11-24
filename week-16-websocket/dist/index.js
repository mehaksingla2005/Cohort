"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//socket lets you talk with the person on this websocket
//every time you get a new request ,new socket gets created
let usercount = 0;
wss.on("connection", (socket) => {
    console.log("user connected #" + usercount);
    usercount = usercount + 1;
    socket.on("message", (message) => {
        console.log("message recieved :" + message.toString());
    });
});
