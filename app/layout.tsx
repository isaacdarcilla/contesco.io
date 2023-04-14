"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#232323",
    },
  },
});

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
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
