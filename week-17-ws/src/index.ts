import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

//event handler
wss.on("connection",function(socket){
    console.log("user connected");
    setInterval(()=>{
        socket.send("current price of solana is "+Math.random());
    },5000)

    //agr client message bhej rha hai
    socket.on("message",(e)=>{
        console.log(e.toString());
    })

})