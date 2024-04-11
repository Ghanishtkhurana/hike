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
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-w-[400px] px-10 py-5 border rounded-lg border-gray-500 flex flex-col justify-center items-center gap-10"
      >
        <p className="text-[22px] font-semibold">Sign up</p>
        <div className="w-full flex flex-col gap-2">
          <Input
            {...register("full_name", {
              required: true,
            })}
            label={"Full name"}
            variant="underlined"
          />
          <Input
            {...register("username", {
              required: true,
            })}
            label={"Username"}
            variant="underlined"
          />
          <Select
            {...register("gender", {
              required: true,
            })}
            label="Select gender"
            placeholder=""
            variant="underlined"
          >
            {gen.map((el) => (
              <SelectItem key={el.value} value={el.value}>
                {el.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            {...register("password", {
              required: true,
            })}
            label={"password"}
            variant="underlined"
          />
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
