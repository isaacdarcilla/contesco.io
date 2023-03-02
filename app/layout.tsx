"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Sidebar from "@/components/sidebar/Sidebar";
import SidebarButton from "@/components/sidebar/SidebarButton";
import { Home } from "react-feather";
import NavBar from "@/components/navbar/NavBar";
import { Lora } from "next/font/google";

const lora = Lora();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <SessionProvider>
        <body className={lora.className}>
          <div className="bg-primary h-screen w-full flex overflow-hidden">
            <Sidebar>
              <SidebarButton content="Home" link="/home">
                <Home size={18} />
              </SidebarButton>
            </Sidebar>
            <NavBar>{children}</NavBar>
          </div>
        </body>
      </SessionProvider>
    </html>
  );
}
