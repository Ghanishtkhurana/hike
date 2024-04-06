import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import { IoMdSend } from "react-icons/io";

const ChatInp = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = () => {};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-14 flex gap-3 items-center px-4 border-t border-[#314153]"
    >
      <Input
        {...register("text", {
          required: "This field is required",
        })}
        size="sm"
        radius="xl"
        color={"primary"}
        placeholder="Search"
        variant="underlined"
        className="text-white"
      />
      <Button
        isLoading={false}
        isIconOnly
        className="bg-green-200 cursor-pointer"
        radius="full"
      >
        <IoMdSend className="text-green-500" />
      </Button>
    </form>
  );
};

export default ChatInp;
