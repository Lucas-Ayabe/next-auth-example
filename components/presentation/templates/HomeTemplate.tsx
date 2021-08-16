import Link from "next/link";
import React from "react";
import Layout from "../molecules/Layout";

const HomeTemplate = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <Link href="/secret" passHref>
        <a>Go to secret content</a>
      </Link>
    </Layout>
  );
};

export default HomeTemplate;
