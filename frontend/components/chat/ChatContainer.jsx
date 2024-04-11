import React from "react";
import ChatNav from "./ChatContainer/ChatNav";
import ChatInp from "./ChatContainer/ChatInp";
import ChatDiv from "./ChatContainer/ChatDiv";

const ChatContainer = () => {
  return (
    <div className="flex flex-col h-screen bg-[#17212b] text-white">
      {/* chat nav  */}
      <div
        className={`h-14 z-50 border-b border-[#314153] flex items-center px-4 w-full`}
      >
        <ChatNav />
      </div>
      <div className="flex-1 overflow-y-scroll customScrollbar">
        <ChatDiv />
      </div>
      <div>
        <ChatInp />
      </div>
    </div>
  );
};

export default ChatContainer;
