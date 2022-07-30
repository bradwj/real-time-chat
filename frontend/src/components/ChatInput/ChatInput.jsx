import React from "react";
import "./ChatInput.scss";

const ChatInput = ({ sendMessage }) => (
  <div className="chat-input">
    <input onKeyDown={sendMessage} placeholder="Enter a message and press Enter to send!"/>
  </div>
);

export default ChatInput;
