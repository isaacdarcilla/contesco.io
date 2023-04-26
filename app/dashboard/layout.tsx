"use client";

import "../../app/globals.css";
import { SessionProvider } from "next-auth/react";
import Sidebar from "@/components/sidebar/Sidebar";
import SidebarButton from "@/components/sidebar/SidebarButton";
import {
  BarChart2,
  CheckSquare,
  Home,
  MessageCircle,
  User,
} from "react-feather";
import NavBar from "@/components/navbar/NavBar";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SessionProvider>
      <main className={montserrat.className}>
        <div className="bg-primary h-screen w-full flex overflow-hidden tracking-tight">
          <Sidebar>
            <SidebarButton content="Home" link="/dashboard" path="/dashboard">
              <Home size={18} />
            </SidebarButton>
            {pathname !== "/dashboard" ? (
              <div>
                <SidebarButton
                  content="Dashboard"
                  link={pathname!}
                  path={pathname!}
                >
                  <BarChart2 size={18} />
                </SidebarButton>
                <SidebarButton
                  content="Contestants"
                  link="/dashboard"
                  path="/dashboard"
                >
                  <User size={18} />
                </SidebarButton>
                <SidebarButton
                  content="Judges"
                  link="/dashboard"
                  path="/dashboard"
                >
                  <MessageCircle size={18} />
                </SidebarButton>
                <SidebarButton
                  content="Criteria"
                  link="/dashboard"
                  path="/dashboard"
                >
                  <CheckSquare size={18} />
                </SidebarButton>
              </div>
            ) : (
              ""
            )}
          </Sidebar>
          <NavBar>{children}</NavBar>
        </div>
      </main>
    </SessionProvider>
  );
}
