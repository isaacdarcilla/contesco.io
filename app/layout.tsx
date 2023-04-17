"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#232323",
      200: "#1C1C1C",
    },
  },
});

const queryClient = new QueryClient();

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
          <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
          </QueryClientProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
