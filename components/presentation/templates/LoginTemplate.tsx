import React from "react";
import { signIn } from "next-auth/client";
import Layout from "../molecules/Layout";

const LoginTemplate = () => {
  return (
    <Layout>
      <h1>Login</h1>
      <button onClick={() => signIn()}>Login</button>
    </Layout>
  );
};

export default LoginTemplate;
