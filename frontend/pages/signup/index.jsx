import useCreateUser from "@/libs/mutations/auth/useCreateUser";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";

let gen = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

const Signup = () => {
  const { handleSubmit, register } = useForm();
  const { mutate, isPending } = useCreateUser();

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };
  return (
    <div className="min-h-screen bg-[#17212b] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-w-[400px] px-10 py-10 text-white bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex flex-col justify-center items-center gap-10"
      >
        <p className="text-[22px] font-semibold">Sign up</p>
        <div className="w-full flex flex-col gap-4">
          <div>
            <p className="text-[12px] text-white">Full name</p>
            <Input
              {...register("full_name", {
                required: true,
              })}
              variant="underlined"
              className="text-white"
              color="secondary"
            />
          </div>
          <div>
            <p className="text-[12px] text-white">Username</p>
            <Input
              {...register("username", {
                required: true,
              })}
              variant="underlined"
              className="text-white"
              color="secondary"
            />
          </div>
          <div>
            <p className="text-[12px] text-white">Gender</p>

            <Select
              {...register("gender", {
                required: true,
              })}
              placeholder=""
              color="secondary"
              variant="underlined"
            >
              {gen.map((el) => (
                <SelectItem key={el.value} value={el.value}>
                  {el.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <p className="text-[12px] text-white">Password</p>
            <Input
              {...register("password", {
                required: true,
              })}
              className="text-white"
              variant="underlined"
              color="secondary"
            />
          </div>
        </div>
        <Button
          isLoading={isPending}
          type="submit"
          className="self-end"
          color="secondary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Signup;
