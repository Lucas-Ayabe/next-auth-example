import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

type WithAuth = <T>(handler: GetServerSideProps<T>) => GetServerSideProps<T>;

const withAuth: WithAuth = <T>(handler: GetServerSideProps<T>) => {
  return async (context) => {
    const session = await getSession(context);
    console.log("session", session);

    if (!session) {
      return {
        redirect: {
          destination: "/signin",
          statusCode: 302,
        },
      };
    }

    return handler(context);
  };
};

export default withAuth;
