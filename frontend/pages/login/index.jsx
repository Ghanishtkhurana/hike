import useLogin from "@/libs/mutations/auth/useLogin";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const { mutate, isPending } = useLogin();

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-w-[400px] px-10 py-10 border rounded-lg border-gray-500 flex flex-col justify-center items-center gap-10"
      >
        <p className="text-[22px] font-semibold">Login</p>
        <div className="w-full flex flex-col gap-5">
          <Input
            {...register("username", {
              required: true,
            })}
            label={"Email"}
            variant="underlined"
          />
          <Input
            {...register("password", {
              required: true,
            })}
            label={"Password"}
            variant="underlined"
          />
        </div>
        <Button
          type="submit"
          isLoading={isPending}
          className="self-end"
          color="secondary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
