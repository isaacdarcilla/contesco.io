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
    <SessionProvider>
      <main className={montserrat.className}>
        <div className="bg-primary h-screen w-full flex overflow-hidden tracking-tight">
          <Sidebar>
            <SidebarButton content="Home" link="/dashboard/home">
              <Home size={18} />
            </SidebarButton>
          </Sidebar>
          <NavBar>{children}</NavBar>
        </div>
      </main>
    </SessionProvider>
  );
}
