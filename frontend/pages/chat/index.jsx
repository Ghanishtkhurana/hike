import ChatContainer from "@/components/chat/ChatContainer";
import ChatSidebar from "@/components/chat/ChatSidebar";
import useConvo from "@/zustand/useConvo";
import React from "react";

const Chat = () => {
  const { selectedConvo } = useConvo();
  console.log("selectedConvo", selectedConvo);
  return (
    <div className="flex min-h-screen customScrollbar relative">
      <ChatSidebar />
      <div className="flex-1 bg-green-400">
        {!selectedConvo ? (
          <div className="flex bg-[#17212b] justify-center h-full items-center ">
            <p className="text-[15px] text-white">
              Select a chat to start messaging
            </p>
          </div>
        ) : (
          <ChatContainer />
        )}
      </div>
    </div>
  );
};

export default Chat;
