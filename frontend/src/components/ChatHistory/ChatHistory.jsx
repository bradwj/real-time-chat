import React from "react";
import "./ChatHistory.scss";

const ChatHistory = ({ chatHistory }) => (
  <div className="chat-history">
    <h2>Chat History</h2>
    {chatHistory.map((msg, index) => (
      <p key={index}>{msg.data}</p>
    ))}
  </div>
);

export default ChatHistory;