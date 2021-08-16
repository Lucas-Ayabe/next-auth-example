import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoginTemplate from "../components/presentation/templates/LoginTemplate";

const Login = () => {
  return <LoginTemplate />;
};

export default Login;
