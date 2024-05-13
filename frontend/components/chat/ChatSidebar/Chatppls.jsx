// import useGetAllClient from "@/libs/queries/clients/useGetAllClients";
// import {
//   addAllClients,
//   addNewClient,
//   selectClient,
// } from "@/slice/SelectClientSlice";
import { SocketContext } from "@/context/SocketContext";
import useGetAllClient from "@/libs/queries/users/useGetAllClients";
import useConvo from "@/zustand/useConvo";
import { Spinner } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { io } from "socket.io-client";

let arr = [
  {
    first_name: "ghan",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
  {
    first_name: "two",
    lastRecievedMessageTime: 1,
    lastSentMessageTime: 2,
    lastRecievedMessage: "hello",
    lastSentMessage: "hi",
  },
];
const Chatppls = () => {
  const { data, isLoading } = useGetAllClient();
  const { selectedConvo, setSelectedConvo } = useConvo();
  const { onlineusers } = useContext(SocketContext);

  return (
    <div className="">
      {isLoading ? (
        <div className="flex justify-center items-center gap-3 h-full">
          <Spinner />
          <p className="text-white text-[17px]">Loading ...</p>
        </div>
      ) : (
        data?.length > 0 &&
        data?.map((el, i) => (
          <div
            key={i}
            onClick={() => setSelectedConvo(el)}
            className={`hover:bg-[#202b36] ${
              selectedConvo?._id === el?._id ? "bg-[#202b36]" : ""
            } hover:text-white duration-500 transition-all border-b border-[#253241] py-2 px-3 flex gap-4`}
          >
            <div
              style={{
                backgroundColor: "#e91e63",
              }}
              className={`relative h-14 w-14 flex justify-center items-center text-[20px] font-semibold overflow-hidden rounded-full`}
            >
              <Image src={el?.profile_pic} fill alt="profile" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[15px]">
                {el?.full_name.charAt(0).toUpperCase() + el?.full_name.slice(1)}
              </p>
              <p className="text-[12px] text-green-300">{onlineusers.includes(el?._id) ? "Online" : "Offline"}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Chatppls;
