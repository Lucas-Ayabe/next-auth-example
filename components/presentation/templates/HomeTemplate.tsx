import Link from "next/link";
import React from "react";
import Layout from "../molecules/Layout";

const HomeTemplate = () => {
  return (
    <Layout>
      <div className="flow">
        <h1>Home</h1>
        <Link href="/secret" passHref>
          <a className="button">Go to secret content</a>
        </Link>
      </div>
    </Layout>
  );
};

export default HomeTemplate;
