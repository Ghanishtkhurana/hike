import { SocketContext } from "@/context/SocketContext";
import useConvo from "@/zustand/useConvo";
import React, { useContext, useEffect } from "react";

const useListenMsg = () => {
  const { socket } = useContext(SocketContext);
  const { message, setMessage } = useConvo();

  useEffect(() => {
    socket?.on("newMessage", (newmsg) => {
      console.log("new message aya", newmsg);
      //   let audio = new Audio("/sa.mp3");
      //   audio.play();
      setMessage([...message, newmsg]);
    });
  }, [socket, message, setMessage]);
};

export default useListenMsg;
