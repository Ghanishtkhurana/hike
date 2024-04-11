import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "@/libs/mutations/Text/useSendMessage";

const ChatInp = () => {
  const { handleSubmit, register, reset } = useForm();
  const { mutate, isPending } = useSendMessage();

  const onSubmit = (data) => {
    mutate({ msg: data });
    reset({ message: "" });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-14 flex gap-3 items-center px-4 border-t border-[#314153]"
    >
      <input
        {...register("message", {
          required: "This field is required",
        })}
        className="text-white h-9 p-2 w-full bg-transparent focus:outline-none focus:border-[#314153] text-[13px] border-1 border-[#314153]"
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
