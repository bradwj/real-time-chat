import { useState, useEffect } from "react";
import './App.css';
import { connect, sendMsg } from './api';
import Header from "./components/Header/Header"
import ChatHistory from './components/ChatHistory/ChatHistory'


function App() {

  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      const newChatHistory = [...chatHistory, msg];
      setChatHistory(newChatHistory);
    });
    console.log(chatHistory);
  }, []);
  

  function sendMessage() {
    console.log("Hello");
    sendMsg("Hello");
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
