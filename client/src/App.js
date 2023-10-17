import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

function App() {
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    socket = io('http://localhost:4001');
    
    socket.on('message', (message) => {
      setReceivedMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', message);
    setMessage("");
  };

  return (
    <div className="App">
      <input 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <button onClick={sendMessage}>Send</button>

      <ul>
        {receivedMessages.map((msg, i) => <li key={i}>{msg}</li>)}
      </ul>
    </div>
  );
}

export default App;
