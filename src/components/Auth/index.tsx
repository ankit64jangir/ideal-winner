import React, { useState } from "react";
import Login from "./LogIn";
import SignUp from "./SignUp";

export type AuthType = "login" | "signup";

function Auth() {
  const [auth, setAuth] = useState<AuthType>("login");

  const updateAuth = (newAuth: AuthType) => {
    setAuth(newAuth);
  };

  return (
    <div>
      {auth === "login" ? (
        <Login updateAuth={updateAuth} />
      ) : (
        <SignUp updateAuth={updateAuth} />
      )}
    </div>
  );
}

export default Auth;
