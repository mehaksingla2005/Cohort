
// import { useEffect, useRef, useState } from 'react'
// import './App.css'

// function App() {
//   const [messages,setMessages]=useState(["hi there"]);
//   const wsRef=useRef();
//   useEffect(()=>{
//     const ws=new WebSocket("http://localhost:8080");
//     ws.onmessage = (event) => {
//       setMessages((m) => [...m, event.data]);
//     };
//     wsRef.current=ws;
//     ws.onopen=()=>{
//       ws.send(JSON.stringify({
        
//           "type": "join",
//           "payload": {
//             "roomId": "123"
//           }
       
//       }))
//     }
//   },[])

//   return (
//     <div className='h-screen bg-black '>
//       <br/><br/><br/>
//       <div className='h-[85vh]'>
//         {messages.map(message=><div className=' m-8'><span className='bg-white text-black rounded p-4'>
//           {message}
//         </span></div>)}
//       </div>
//       <div className='h-[95vh]'></div>
//       <div className='w-full bg-white flex'>
//       <input id="message" className='flex-1 p-4'></input> 
//       <button onClick={()=>{
//           const message=document.getElementById("message")?.value;
//             wsRef.current.send(JSON.stringify({
//               "type": "chat",
//               "payload": {
//                 "message": message
//               }
//             }))
//         }} className='bg-purple-600 text-white'>Send Message</button>
//       </div>  
//     </div>
//   )
// }

// export default App

import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState(["Hi there!"]);
  const [input, setInput] = useState("");
  const wsRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "123",
          },
        })
      );
    };

    ws.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    wsRef.current = ws;

    // Cleanup WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      wsRef.current.send(
        JSON.stringify({
          type: "chat",
          payload: {
            message: input, // Send user input
          },
        })
      );
      setInput(""); // Clear input field after sending
    }
  };

  return (
    <div className="h-screen bg-black flex flex-col">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className="m-4">
            <span className="bg-white text-black rounded p-2">{message}</span>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="w-full bg-white flex p-2">
        <input
          className="flex-1 p-4 border border-gray-300 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update input state
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white px-4 ml-2 rounded"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default App;
