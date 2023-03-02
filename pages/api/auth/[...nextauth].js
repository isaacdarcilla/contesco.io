import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";
import NextAuth from "next-auth";
import { CustomSendVerificationRequest } from "./signinemail";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      sendVerificationRequest({ identifier, url, provider }) {
        CustomSendVerificationRequest({ identifier, url, provider });
      },
    }),
  ],
};

export default NextAuth(authOptions);
