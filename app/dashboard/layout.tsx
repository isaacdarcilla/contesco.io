"use client";

import "../../app/globals.css";
import { SessionProvider } from "next-auth/react";
import Sidebar from "@/components/sidebar/Sidebar";
import SidebarButton from "@/components/sidebar/SidebarButton";
import { Home } from "react-feather";
import NavBar from "@/components/navbar/NavBar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <SessionProvider>
        <body className={montserrat.className}>
          <main className="bg-primary h-screen w-full flex overflow-hidden tracking-tight">
            <Sidebar>
              <SidebarButton content="Home" link="/home">
                <Home size={18} />
              </SidebarButton>
            </Sidebar>
            <NavBar>{children}</NavBar>
          </main>
        </body>
      </SessionProvider>
    </html>
  );
}
