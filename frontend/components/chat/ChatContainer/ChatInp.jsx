import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "@/libs/mutations/Text/useSendMessage";

const ChatInp = () => {
  const { handleSubmit, register, control, reset, setValue } = useForm();
  const { mutate, isPending } = useSendMessage();
  const inpRef = React.useRef();

  // useEffect(() => {
  //   inpRef.current.focus();
  // }, [isPending]);

  const onSubmit = (data) => {
    mutate({ msg: data });
    reset({ message: "" });
    setValue("message", ""); // manually update the value of the input field
    inpRef.current.focus(); // focus the input field
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-14 flex gap-3 items-center px-4 border-t border-[#314153]"
    >
      {/* <input
        {...register("message", {
          required: "This field is required",
        })}
        ref={inpRef}
        className="text-white h-9 p-2 w-full bg-transparent focus:outline-none focus:border-[#314153] text-[13px] border-1 border-[#314153]"
      /> */}
      <Controller
        name="message"
        control={control}
        defaultValue=""
        rules={{ required: "This field is required" }}
        render={({ field }) => (
          <input
            {...field}
            ref={inpRef}
            className="text-white h-9 p-2 w-full bg-transparent focus:outline-none focus:border-[#314153] text-[13px] border-1 border-[#314153]"
          />
        )}
      />
      <Button
        isLoading={isPending}
        isIconOnly
        className="bg-green-200 cursor-pointer"
        radius="full"
        type="submit"
      >
        <IoMdSend className="text-green-500" />
      </Button>
    </form>
  );
};

export default ChatInp;
