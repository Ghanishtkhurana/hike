import useLogin from "@/libs/mutations/auth/useLogin";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
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
    <div className="min-h-screen bg-[#17212b] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-w-[400px] px-10 py-10 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex flex-col justify-center items-center gap-10"
        // className="min-w-[400px]  px-10 py-10 border rounded-lg border-gray-500 flex flex-col justify-center items-center gap-10"
      >
        <p className="text-[22px] text-white font-semibold">Login</p>
        <div className="w-full flex flex-col gap-5">
          <div>
            <p className="text-[12px] text-white">Username</p>
            <Input
              {...register("username", {
                required: true,
              })}
              className="text-white"
              // label={"Username"}
              variant="underlined"
              color="secondary"
            />
          </div>
          <div>
            <p className="text-[12px] text-white">Password</p>
            <Input
              {...register("password", {
                required: true,
              })}
              className="text-white"
              // label={"Password"}
              variant="underlined"
              color="secondary"
            />
          </div>
        </div>
        <Button
          type="submit"
          isLoading={isPending}
          className="self-end"
          color="secondary"
        >
          Submit
        </Button>
        <Link href={"/signup"}>
          <p className="text-white text-[12px] hover:text-purple-400 transition-all duration-300">
            Not have an account yet ? Sign In
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
