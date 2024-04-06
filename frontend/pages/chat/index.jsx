import ChatContainer from "@/components/chat/ChatContainer";
import ChatSidebar from "@/components/chat/ChatSidebar";
import React from "react";

const Chat = () => {
  return (
    <div className="flex min-h-screen customScrollbar relative">
      <ChatSidebar />
      <div className="flex-1 ">
        <ChatContainer />
      </div>
    </div>
  );
};

export default Chat;
