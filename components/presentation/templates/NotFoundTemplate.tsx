import Link from "next/link";
import React from "react";
import Layout from "../molecules/Layout";

const NotFoundTemplate = () => {
  return (
    <Layout>
      <h1>404 - Page Not Found</h1>
      <Link href="/" passHref>
        <a>Voltar</a>
      </Link>
    </Layout>
  );
};

export default NotFoundTemplate;
