import React, { useEffect, useRef } from "react";
import { textArr } from "./data";
import Msg from "./Msg";
import useConvo from "@/zustand/useConvo";
import useGetAllText from "@/libs/queries/text/useGetAllText";
import { Spinner } from "@nextui-org/react";

const ChatDiv = () => {
  const { selectedConvo, setSelectedConvo, setEmptyMessage, message } =
    useConvo();
  const { data, isLoading } = useGetAllText();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // when component unmounts this will clean up the state
    return () => {
      setSelectedConvo(null);
    };
  }, [selectedConvo]);

  React.useEffect(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    }, 50);
  }, [isLoading, message]);

  //clean up useEffect
  useEffect(() => {
    return () => {
      setEmptyMessage();
    };
  }, []);
  return (
    <div className="flex w-full h-full flex-col p-3 gap-3">
      {isLoading && (
        <div>
          <Spinner />
        </div>
      )}
      {message?.length > 0 &&
        message?.map((el, i) => {
          return <Msg key={i} data={el} />;
        })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatDiv;
