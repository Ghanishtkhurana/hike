import React from "react";
import ChatSearchBox from "./ChatSidebar/ChatSearchBox";
import Chatppls from "./ChatSidebar/Chatppls";

const ChatSidebar = () => {
  return (
    <div className="w-[350px] bg-[#17212b] text-white max-h-screen h-full flex flex-col border-r border-[#314153]">
      {/* searchh inp  */}
      <div>
        <ChatSearchBox />
      </div>
      {/* convo chats  */}
      <div className="overflow-y-scroll h-full customScrollbar">
        <Chatppls />
      </div>
      {/* logoutbutton  */}
    </div>
  );
};

export default ChatSidebar;
