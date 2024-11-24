// import { WebSocketServer } from "ws";
// const wss=new WebSocketServer({port:8080});

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

import { WebSocket, WebSocketServer } from "ws";

interface User {
    socket: WebSocket;
    room: string;
}

const wss = new WebSocketServer({ port: 8080 });
let allSockets: User[] = [];

wss.on("connection", (socket) => {
    console.log("New client connected.");

    socket.on("message", (message) => {
        try {
            const parsedMessage = JSON.parse(message.toString());
            
            if (parsedMessage.type === "join") {
                const roomId = parsedMessage.payload?.roomId;
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

                const messageContent = parsedMessage.payload?.message;
                if (!messageContent) {
                    socket.send(JSON.stringify({ error: "Message content cannot be empty." }));
                    return;
                }

                // Broadcast the message to all users in the same room
                allSockets
                    .filter((user) => user.room === currentUser.room)
                    .forEach((user) => user.socket.send(JSON.stringify({ message: messageContent, room: currentUser.room })));
            }
        } catch (err) {
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
