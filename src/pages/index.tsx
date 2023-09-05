import Button from "@/components/core/Button";
import Input from "@/components/core/Input";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <div className="bg-primaryBG flex items-center flex-col w-screen h-screen">
      <div className="bg-gradient-to-r from-[#969696] to-[#343434] w-[463px] h-[420px] p-[2px] rounded-lg">
        <div className="bg-[#27292D] h-full w-full flex flex-col justify-center items-center px-5 rounded-lg">
          <div className="flex flex-col items-center mb-7">
            <span className="text-sm text-[#6B6C70]">WELCOME BACK</span>
            <span className="text-lg text-white mt-2.5">
              Log into your account
            </span>
          </div>
          <Input label="Email or Username" placeholder="Email or Username" />
          <Input
            label="Password"
            placeholder="Enter your password"
            rightText="Forgot password?"
            type="password"
          />
          <Button
            text="Login now"
            onClick={() => {
              router.push("/home", undefined, { shallow: true });
            }}
            className="mt-2"
          />
          <p className="mt-2 self-start text-[#7F8084] text-sm cursor-pointer">
            Not registered yet?{" "}
            <span className="text-[#C5C7CA] font-bold">Register →</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
