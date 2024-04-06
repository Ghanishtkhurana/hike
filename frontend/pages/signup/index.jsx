import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";

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
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="min-w-[400px] px-10 py-5 border rounded-lg border-gray-500 flex flex-col justify-center items-center gap-10">
        <p className="text-[22px] font-semibold">Sign up</p>
        <div className="w-full flex flex-col gap-2">
          <Input label={"Full name"} variant="underlined" />
          <Input label={"Username"} variant="underlined" />
          <Select label="Select gender" placeholder="" variant="underlined">
            {gen.map((el) => (
              <SelectItem key={el.value} value={el.value}>
                {el.label}
              </SelectItem>
            ))}
          </Select>
          <Input label={"password"} variant="underlined" />
        </div>
        <Button className="self-end" color="secondary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Signup;
