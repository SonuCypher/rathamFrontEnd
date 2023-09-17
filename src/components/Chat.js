import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import Config from "../chatConfig/config";
import MessageParser from "../chatConfig/messageparser";
import ActionProvider from "../chatConfig/actionprovider";
import "./Chat.css";

function ChatComponent() {
  return (
    <div className="chat-container">
      <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatComponent;
