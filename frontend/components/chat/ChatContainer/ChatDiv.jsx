import React, { useRef } from "react";
import { textArr } from "./data";
import Msg from "./Msg";

const ChatDiv = () => {
  const messagesEndRef = useRef(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: "end", behavior: "auto" });
  }, [textArr]);
  return (
    <div className="flex w-full flex-col p-3 gap-3">
      {textArr?.length > 0 &&
        textArr
          .filter((el) => String(el.chat_id) === String(el.chat_id))
          ?.map((el, i) => {
            return <Msg key={i} data={el} />;
          })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatDiv;
