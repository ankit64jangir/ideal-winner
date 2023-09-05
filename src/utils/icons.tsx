type IconProps = {
  size?: number;
  color?: string;
};

export const EyeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};

export const CrossEyeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
};

export const MenuIcon = ({ color, size }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};

export const CommentIcon = ({ color, size }: IconProps) => {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.333 3.833H2.667a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5H10a.5.5 0 0 1 .354.147l3.146 3.146v-2.793a.5.5 0 0 1 .5-.5h3.333a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5Zm-14.666-1h14.666a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5H14.5v3.5a.5.5 0 0 1-.854.354l-3.853-3.854H2.667a2.5 2.5 0 0 1-2.5-2.5v-8a2.5 2.5 0 0 1 2.5-2.5Z"
        fill="#C5C7CA"
      />
    </svg>
  );
};

export const Logo = ({ color, size }: IconProps) => {
  return (
    <svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.531 10.666a5.135 5.135 0 1 1 10.271 0 5.135 5.135 0 0 1-10.27 0Zm5.136-7.135a7.135 7.135 0 1 0 0 14.271 7.135 7.135 0 0 0 0-14.271Zm5.267 25.803L6.467 34.57V24.096l9.467 5.238ZM6.322 21.73a1.25 1.25 0 0 0-1.855 1.094v13.019a1.25 1.25 0 0 0 1.855 1.094l11.767-6.51a1.25 1.25 0 0 0 0-2.187L6.322 21.73Zm16.011 1.853c0-.69.56-1.25 1.25-1.25h11.5c.69 0 1.25.56 1.25 1.25v11.5c0 .69-.56 1.25-1.25 1.25h-11.5c-.69 0-1.25-.56-1.25-1.25v-11.5Zm2 .75v10h10v-10h-10ZM35.707 5.707a1 1 0 0 0-1.414-1.414l-4.96 4.96-4.96-4.96a1 1 0 1 0-1.413 1.414l4.96 4.96-4.96 4.959a1 1 0 1 0 1.414 1.414l4.96-4.96 4.959 4.96a1 1 0 1 0 1.414-1.414l-4.96-4.96 4.96-4.96Z"
        fill="#C5C7CA"
      />
    </svg>
  );
};
