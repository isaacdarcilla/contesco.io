import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../src/prismadb";
import NextAuth from "next-auth";
import { SendVerificationRequest } from "./signinEmail";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      sendVerificationRequest({ identifier, url, provider }) {
        SendVerificationRequest({ identifier, url, provider });
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt({ token, user }) {
      return token;
    },
    session({ session, token }) {
      return session;
    },
  },
};

export default NextAuth(authOptions);
