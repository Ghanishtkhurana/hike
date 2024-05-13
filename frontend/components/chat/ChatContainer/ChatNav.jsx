import React, { useContext } from "react";
import { Switch } from "@nextui-org/react";
import { CiSun } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import useConvo from "@/zustand/useConvo";
import Image from "next/image";
import { SocketContext } from "@/context/SocketContext";

let data = {
  first_name: "John",
};
const ChatNav = () => {
  const { selectedConvo } = useConvo();
  const { onlineusers } = useContext(SocketContext);

  return (
    <div className="flex justify-between items-center h-14 w-full">
      <div className="flex gap-3">
        <div className="relative h-10 w-10 flex justify-center items-center bg-[#e91e63] rounded-full overflow-hidden">
          <Image src={selectedConvo?.profile_pic} fill alt="profile" />
        </div>
        <div className="flex flex-col">
          <p className="text-[15px] font-semibold">
            {selectedConvo?.full_name}
          </p>
          <p className="text-[10px] tracking-wide text-green-400">
            {onlineusers?.includes(selectedConvo?._id) ? "Online" : "Offline"}
          </p>
        </div>
      </div>
      <Switch
        defaultSelected
        // onChange={handleDarkMode}
        size="sm"
        color="danger"
        startContent={<CiSun className="h-4 w-4 text-yellow-500" />}
        endContent={<MdDarkMode className="" />}
      ></Switch>
    </div>
  );
};

export default ChatNav;
