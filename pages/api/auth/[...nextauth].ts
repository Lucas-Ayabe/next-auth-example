import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import Providers from "next-auth/providers";
import { FormCredentials } from "../../../domain/entities/auth/User";
import throwError from "../../../infrastructure/helpers/errors/throw-error";
import login from "../../../services/auth/login";

export default NextAuth({
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  callbacks: {
    async jwt(token, user, account) {
      // if (user && account && account?.id === "credentials") {
      //   token.user = user;
      // }

      return token;
    },
    async session(session, token: JWT & { user: User }) {
      // if (!!token?.user?.token) {
      //   session.user.token = token.user.token;
      // }

      return session;
    },
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.GH_CLIENT_ID,
      clientSecret: process.env.GH_CLIENT_SECRET,
    }),
    Providers.Credentials({
      id: "credentials",
      name: "Domain Login",
      credentials: {
        cpf: { label: "CPF", type: "cpf" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: FormCredentials) {
        return login(credentials.cpf, credentials.password);
      },
    }),
  ],
});
