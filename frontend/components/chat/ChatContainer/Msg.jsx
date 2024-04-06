import React from "react";

const Msg = ({ data }) => {
  return (
    <div
      className={`text-white w-fit py-2 px-4 bg-[#273544] ${
        data.status === "sent"
          ? "animate-fade-left self-end rounded-t-2xl rounded-l-2xl"
          : "animate-fade-right self-start rounded-t-2xl rounded-r-2xl"
      }`}
    >
      {data.text}
    </div>
  );
};

export default Msg;
