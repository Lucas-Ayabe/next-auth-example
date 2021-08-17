import React from "react";
import { GetServerSideProps } from "next";
import { providers, getSession, csrfToken } from "next-auth/client";
import LoginTemplate, {
  LoginTemplateProps as Props,
} from "../components/presentation/templates/LoginTemplate";

type ServerSideProps = GetServerSideProps<Props>;

const Login = (props: Props) => {
  return <LoginTemplate {...props} />;
};

export const getServerSideProps: ServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        statusCode: 302,
      },
    };
  }

  return {
    props: {
      providers: await providers(),
      csrfToken: await csrfToken(context),
    },
  };
};

export default Login;
