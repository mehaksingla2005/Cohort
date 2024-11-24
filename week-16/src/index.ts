import { WebSocketServer } from "ws";
const wss=new WebSocketServer({port:8080});


wss.on("connection",function(socket){
    console.log("user connected");
    // setInterval(()=>{
    //     socket.send("current solana price is :"+Math.random())
    // },500);
    socket.on("message", (message) => {
        if(message.toString()==="ping"){
            socket.send("pong");
        }
        console.log("Received message:", message.toString());
    });
})