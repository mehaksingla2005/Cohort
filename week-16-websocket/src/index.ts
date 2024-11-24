import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let usercount = 0;
let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
    allSockets.push(socket);

    console.log("User connected #" + usercount);
    usercount += 1;

    socket.on("message", (message) => {
        console.log("Message received: " + message.toString());
        // Broadcast the message to all connected clients
        for (let i = 0; i < allSockets.length; i++) {
            const s = allSockets[i];
            s.send(message.toString() + ": sent from the server");
        }
    });

    // Listen for the 'close' event for disconnections
    socket.on("close", () => {
        console.log("User disconnected");
        allSockets = allSockets.filter((x) => x !== socket);
    });
});

console.log("WebSocket server running on ws://localhost:8080");
