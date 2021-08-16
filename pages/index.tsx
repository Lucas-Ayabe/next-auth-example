import React from "react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import HomeTemplate from "../components/presentation/templates/HomeTemplate";
import httpClient from "../services/httpClient";

const Home = () => {
  return <HomeTemplate />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session?.user.token) {
    httpClient
      .get("/ListaEstabelecimento", {
        headers: {
          Authorization: "Bearer " + session.user.token,
        },
      })
      .then((response) => response.data)
      .catch((error) => error.response.data)
      .then(console.log);
  }

  return {
    props: { session },
  };
};

export default Home;
