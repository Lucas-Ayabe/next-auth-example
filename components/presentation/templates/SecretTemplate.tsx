import React from "react";
import { signOut } from "next-auth/client";
import withAuth from "../../hocs/withAuth";
import Layout from "../molecules/Layout";

const SecretTemplate = () => {
  return (
    <Layout>
      <h1>Secret</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </Layout>
  );
};

export default SecretTemplate;
