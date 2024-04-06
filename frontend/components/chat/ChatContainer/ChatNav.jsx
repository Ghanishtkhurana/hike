import React from "react";
import { Switch } from "@nextui-org/react";
import { CiSun } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
// import { setDarkMode } from "@/slice/uiSlice";

let data = {
  first_name: "John",
};
const ChatNav = () => {
  return (
    <div className="flex justify-between items-center h-14 w-full">
      <div className="flex gap-3">
        <div className="h-10 w-10 flex justify-center items-center bg-[#e91e63] rounded-full overflow-hidden">
          <p>{data.first_name.charAt(0)}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[15px] font-semibold">{data?.first_name}</p>
          <p className="text-[13px]">user</p>
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
