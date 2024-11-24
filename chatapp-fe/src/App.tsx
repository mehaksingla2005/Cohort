import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState<string[]>(["Hi there"]);
  const wsRef = useRef<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");
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
    const message = inputRef.current?.value.trim();
    if (message && wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(message);
      inputRef.current.value = ""; // Clear input field
    }
  };

  return (
    <div className="h-screen bg-black">
      <div className="h-[95vh] overflow-y-scroll p-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <span className="bg-white text-black rounded p-4 inline-block">
              {message}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full bg-white flex">
        <input
          ref={inputRef}
          className="flex-1 p-4 border rounded"
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white p-4 rounded"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default App;
