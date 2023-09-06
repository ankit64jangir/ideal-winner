import { useRouter } from "next/router";
import React from "react";
import { AuthType } from ".";
import Button from "../core/Button";
import Input from "../core/Input";

type SignupProps = {
  updateAuth: (newAuth: AuthType) => void;
};

function SignUp({ updateAuth }: SignupProps) {
  const router = useRouter();

  const handleLoginClick = () => {
    updateAuth("login");
  };

  return (
    <div className="bg-gradient-to-r from-[#969696] to-[#343434] w-[463px] h-[506px] p-[2px] rounded-lg">
      <div className="bg-[#27292D] h-full w-full flex flex-col justify-center items-center px-5 rounded-lg">
        <div className="flex flex-col items-center mb-7">
          <span className="text-sm text-[#6B6C70]">SIGN UP</span>
          <span className="text-lg text-white mt-2.5">
            Create an account to continue
          </span>
        </div>
        <Input label="Email" placeholder="Enter your email" />
        <Input label="Username" placeholder="Choose a preferred username" />
        <Input
          label="Password"
          placeholder="Choose a strong password"
          type="password"
        />
        <Button
          text="Continue"
          onClick={() => {
            router.push("/home", undefined, { shallow: true });
          }}
          className="mt-2"
        />
        <p
          className="mt-2 self-start text-[#7F8084] text-sm cursor-pointer"
          onClick={handleLoginClick}
        >
          Already have an account?{" "}
          <span className="text-[#C5C7CA] font-bold">Login →</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
