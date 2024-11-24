"use strict";
// import { WebSocketServer } from "ws";
// const wss=new WebSocketServer({port:8080});
Object.defineProperty(exports, "__esModule", { value: true });
// interface User {
//     socket:WebSocket;
//     room:string;
// }
// let allSockets:User[]=[];
// wss.on("connection",function(socket){
//     socket.on("message",(message)=>{
//        const parsedMessage= JSON.parse(message);
//        if(parsedMessage.type=="join"){
//         allSockets.push({
//             socket,
//             room:parsedMessage.payload.roomId,
//         })
//        }
//        if(parsedMessage.type=="chat"){
//         //const currentUserRoom=allSockets.find((x)=>x.socket===socket).room;
//         let currentUserRoom=null;
//         for(let i=0;i<allSockets.length;i++){
//             if(allSockets[i].socket==socket){
//                currentUserRoom=allSockets[i].roomId
//             }
//         }
//         for(let i=0;i<allSockets.length;i++){
//             if(allSockets[i].room==currentUserRoom){
//                 allSockets[i].socket.send(parsedMessage.payload.message)
//             }
//         }
//        }
//     })
// })
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    console.log("New client connected.");
    socket.on("message", (message) => {
        var _a, _b;
        try {
            const parsedMessage = JSON.parse(message.toString());
            if (parsedMessage.type === "join") {
                const roomId = (_a = parsedMessage.payload) === null || _a === void 0 ? void 0 : _a.roomId;
                if (!roomId) {
                    socket.send(JSON.stringify({ error: "roomId is required to join a room" }));
                    return;
                }
                allSockets.push({ socket, room: roomId });
                console.log(`Client joined room: ${roomId}`);
                return;
            }
            if (parsedMessage.type === "chat") {
                const currentUser = allSockets.find((user) => user.socket === socket);
                if (!currentUser) {
                    socket.send(JSON.stringify({ error: "You must join a room before sending messages." }));
                    return;
                }
                const messageContent = (_b = parsedMessage.payload) === null || _b === void 0 ? void 0 : _b.message;
                if (!messageContent) {
                    socket.send(JSON.stringify({ error: "Message content cannot be empty." }));
                    return;
                }
                // Broadcast the message to all users in the same room
                allSockets
                    .filter((user) => user.room === currentUser.room)
                    .forEach((user) => user.socket.send(JSON.stringify({ message: messageContent, room: currentUser.room })));
            }
        }
        catch (err) {
            console.error("Error processing message:", err);
            socket.send(JSON.stringify({ error: "Invalid message format." }));
        }
    });
    socket.on("close", () => {
        allSockets = allSockets.filter((user) => user.socket !== socket);
        console.log("Client disconnected.");
    });
    socket.on("error", (err) => {
        console.error("WebSocket error:", err);
    });
});
console.log("WebSocket server running on ws://localhost:8080");
