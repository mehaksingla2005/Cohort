// import { WebSocketServer,WebSocket } from 'ws';

// const wss = new WebSocketServer({ port: 8080 });


// let userCount=0;
// let allSockets:WebSocket[]=[];
// wss.on("connection",(socket)=>{
//     allSockets.push(socket);
//     userCount+=1;
//     console.log("user Connected #"+userCount);

//     socket.on("message",(e)=>{
//         console.log("message Recieved:"+e.toString());
//         setTimeout(()=>{
//             socket.send(e.toString() +":message sent from server");
//         },1000);
//         // for(let i=0;i<allSockets.length;i++){
//         //     const s=allSockets[i];
//         //     s.send(e.toString() +":message sent from server");
//         // }
//         allSockets.forEach(s=>{
//             s.send(e.toString() +":message sent from server");
//         })
        
//     })
//     socket.on("disconnect",()=>{
//         allSockets=allSockets.filter(x=>x!=socket);
//     })
// })



import { WebSocketServer,WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
interface User{
    socket:WebSocket;
    room:string;
}
let allSocketss:User[]=[];

wss.on("connection",(socket)=>{
        socket.on("message",(message)=>{
            const parsedMessage=JSON.parse(message as unknown as string);
            if(parsedMessage.type==="join"){
                console.log("user joined room"+parsedMessage.payload.roomId)
                allSocketss.push({
                    socket,
                    room:parsedMessage.payload.roomId
                })
            }
            if(parsedMessage.type==="chat"){
                console.log("user wants to chat")
               // const currentUserRoom=allSocketss.find((x)=>x.socket==socket).room
               let currentUserRoom=null;
               for(let i=0;i<allSocketss.length;i++){
                    if(allSocketss[i].socket==socket)currentUserRoom=allSocketss[i].room;

               }
               for(let i=0;i<allSocketss.length;i++){
                if(allSocketss[i].room==currentUserRoom){
                    allSocketss[i].socket.send(parsedMessage.payload.message);
                }
               }
            }
            
        })
        socket.on("disconnect",()=>{
            
        })
    })