import React, { MouseEvent } from "react";

type ButtonTypes = {
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const Button = ({ text, onClick, className }: ButtonTypes) => {
  return (
    <button
      className={`bg-[#4A96FF] hover:bg-[#4a95ffd9] text-white text-base py-2 px-4 rounded w-full h-[43px] ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
