"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <SessionProvider>
        <body>
          <ChakraProvider>{children}</ChakraProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
