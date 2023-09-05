import { CrossEyeIcon, EyeIcon } from "@/icons";
import React, { useState } from "react";

type InputProps = {
  label: string;
  rightText?: string;
  placeholder: string;
  type?: "text" | "password";
};

const Input = ({
  label,
  placeholder,
  rightText,
  type = "text",
}: InputProps) => {
  const [inputType, setInputType] = useState<"text" | "password">(type);
  return (
    <div className="relative w-full mb-4">
      <div className="flex flex-row justify-between">
        <p className="text=[#C5C7CA] text-sm">{label}</p>
        <p className="text=[#C5C7CA] text-sm">{rightText}</p>
      </div>
      <div className="mt-2 flex flex-row justify-between items-center">
        <input
          className="placeholder-[#7F8084] border-[2px] focus:border-gray-600 text-base bg-[#27292D] focus:outline-none w-full rounded border-[#35373B] text-white px-2.5 py-2"
          placeholder={placeholder}
          type={inputType}
        />
        {type === "password" && (
          <div
            className="absolute right-4"
            onClick={() => {
              if (inputType === "password") {
                setInputType("text");
              } else {
                setInputType("password");
              }
            }}
          >
            {inputType === "password" ? <EyeIcon /> : <CrossEyeIcon />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
