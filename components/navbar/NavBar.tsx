"use client";

import { Button } from "flowbite-react";
import { Bell, MessageCircle } from "react-feather";

export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full h-full flex flex-col container">
        <nav className="h-12 w-full flex items-center relative justify-between bg-secondary">
          <div className="flex flex-col items-start text-white text-xs mx-3">
            Contesco
          </div>
          <div className="flex flex-shrink-0 items-center space-x-4 mx-3">
            <Button
              size="xs"
              className="bg-primary hover:bg-gray-700 hover:border-gray-800 focus:border-none -mr-2"
            >
              <MessageCircle size={14} />{" "}
              <small className="text-xs mx-2">Feedback?</small>
            </Button>
            <Button
              size="xs"
              className="bg-primary hover:bg-gray-700 hover:border-gray-800 focus:border-none"
            >
              &nbsp;
              <Bell size={14} />
              &nbsp;
            </Button>
          </div>
        </nav>
        <section className="container">{children}</section>
      </div>
    </>
  );
}
