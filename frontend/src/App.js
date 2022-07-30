import { useState, useEffect } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header/Header"
import ChatHistory from "./components/ChatHistory/ChatHistory"
import ChatInput from "./components/ChatInput/ChatInput"

function App() {

  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      const newChatHistory = [...chatHistory, msg];
      setChatHistory(newChatHistory);
    });
  }, [chatHistory]);
  

  function sendMessage(event) {
    // send message when enter key pressed
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;
