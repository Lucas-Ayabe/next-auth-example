import React from "react";
import { signOut } from "next-auth/client";
import Layout from "../molecules/Layout";
import Link from "next/link";

const SecretTemplate = () => {
  return (
    <Layout>
      <div className="flow">
        <h1>Secret</h1>

        <div className="row">
          <Link href="/" passHref>
            <a className="button">Go to Home</a>
          </Link>

          <button className="button -text" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SecretTemplate;
