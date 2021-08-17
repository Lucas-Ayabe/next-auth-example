import { getSession } from "next-auth/client";
import React from "react";
import SecretTemplate from "../components/presentation/templates/SecretTemplate";
import withAuth from "../infrastructure/http/with-auth";
import httpClient from "../services/httpClient";

const Secret = () => <SecretTemplate />;

export const getServerSideProps = withAuth(async (context) => {
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
});

export default Secret;
