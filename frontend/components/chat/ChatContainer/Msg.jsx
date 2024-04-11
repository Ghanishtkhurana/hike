import useConvo from "@/zustand/useConvo";
import React from "react";

const Msg = ({ data }) => {
  const { selectedConvo, setSelectedConvo } = useConvo();

  return (
    <div
      className={`text-white w-fit py-2 px-4 bg-[#273544] ${
        selectedConvo._id !== data.senderId
          ? "self-end rounded-t-2xl rounded-l-2xl"
          : "self-start rounded-t-2xl rounded-r-2xl"
      }`}
    >
      {data.message}
    </div>
  );
};

export default Msg;
