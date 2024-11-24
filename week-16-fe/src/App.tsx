import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage() {
    if (!socket || !inputRef.current) return;

    const message = inputRef.current.value.trim();
    if (message) {
      socket.send(message);
      inputRef.current.value = ''; // Clear input after sending
    }
  }

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    };

    ws.onerror = (err) => {
      console.error('WebSocket error:', err);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    // Cleanup WebSocket on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
