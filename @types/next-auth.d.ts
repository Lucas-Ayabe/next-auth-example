import NextAuth from "next-auth";
import { User as DomainUser } from "../domain/entities/auth/User";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: DomainUser & { email?: string; image?: string };
  }

  interface User extends Record<string, unknown>, DefaultUser, DomainUser {}
}
