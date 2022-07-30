import React from "react";
import "./Message.scss";

const Message = ({ message }) => (
  <div className="message">
    {JSON.parse(message).Body}
  </div>
);

export default Message;