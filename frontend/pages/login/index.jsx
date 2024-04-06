import { Button, Input } from "@nextui-org/react";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="min-w-[400px] px-10 py-10 border rounded-lg border-gray-500 flex flex-col justify-center items-center gap-10">
        <p className="text-[22px] font-semibold">Login</p>
        <div className="w-full flex flex-col gap-5">
          <Input label={"Email"} variant="underlined" />
          <Input label={"Password"} variant="underlined" />
        </div>
        <Button className="self-end" color="secondary">Submit</Button>
      </div>
    </div>
  );
};

export default Login;
