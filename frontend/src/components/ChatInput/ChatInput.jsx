import React from "react";
import "./ChatInput.scss";

const ChatInput = ({ sendMessage }) => (
  <div className="chat-input">
    <input onKeyDown={sendMessage} />
  </div>
);

export default ChatInput;
